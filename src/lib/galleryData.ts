import fs from "fs";
import path from "path";

// Define the interface for a single gallery item
export interface GalleryItem {
  src: string;
  title: string;
  description: string;
  category: string;
}

// Base directory for public gallery images
const GALLERY_BASE_PATH = path.join(process.cwd(), "public", "gallery");
const PUBLIC_GALLERY_PREFIX = "/gallery";

export function getGalleryData(): {
  items: GalleryItem[];
  categories: string[];
} {
  const galleryItems: GalleryItem[] = [];
  const categoriesSet = new Set<string>(); // Use a Set to store unique categories

  // Add 'All' as the first category
  categoriesSet.add("Doğum Günü");

  try {
    const categoryFolders = fs
      .readdirSync(GALLERY_BASE_PATH, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    for (const folder of categoryFolders) {
      const category = formatCategoryName(folder); // Format folder name to category name
      categoriesSet.add(category); // Add to unique categories

      const categoryPath = path.join(GALLERY_BASE_PATH, folder);
      const imageFiles = fs.readdirSync(categoryPath);

      for (const file of imageFiles) {
        // Only include common image formats
        if (/\.(jpeg|jpg|png|gif|webp)$/i.test(file)) {
          const src = `${PUBLIC_GALLERY_PREFIX}/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

          // Basic title/description from filename - you'll want to refine this
          const title = file
            .replace(/\.(jpeg|jpg|png|gif|webp)$/i, "")
            .replace(/[\(\)-_.]/g, " ")
            .trim();
          const description = `${category} collection.`;

          galleryItems.push({
            src,
            title: capitalizeFirstLetter(title),
            description,
            category,
          });
        }
      }
    }
  } catch (error) {
    console.error("Error reading gallery data:", error);
  }

  // Sort items alphabetically by title for consistent display
  galleryItems.sort((a, b) => a.title.localeCompare(b.title));

  return {
    items: galleryItems,
    categories: Array.from(categoriesSet).sort(),
  };
}

// Helper function to format folder names into cleaner category names
function formatCategoryName(name: string): string {
  // Example: "bday cakes" -> "Birthday Cakes"
  return name
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
