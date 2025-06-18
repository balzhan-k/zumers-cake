import fs from "fs";
import path from "path";

export interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

const GALLERY_BASE_PATH = path.join(process.cwd(), "public", "gallery");
const PUBLIC_GALLERY_PREFIX = "/gallery";

export function getGalleryData(): {
  items: GalleryItem[];
  categories: string[];
} {
  const galleryItems: GalleryItem[] = [];
  const categoriesSet = new Set<string>();

  try {
    const categoryFolders = fs
      .readdirSync(GALLERY_BASE_PATH, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    for (const folder of categoryFolders) {
      const category = formatCategoryName(folder);
      categoriesSet.add(category);

      const categoryPath = path.join(GALLERY_BASE_PATH, folder);
      const imageFiles = fs.readdirSync(categoryPath);

      for (const file of imageFiles) {
        if (/\.(jpeg|jpg|png|gif|webp)$/i.test(file)) {
          const src = `${PUBLIC_GALLERY_PREFIX}/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

          let baseTitle = file
            .replace(/\.(jpeg|jpg|png|gif|webp)$/i, "")
            .trim();

          baseTitle = baseTitle
            .replace(
              /^WhatsApp Image \d{4}-\d{2}-\d{2} at \d{2}\.\d{2}\.\d{2}( \(\d+\))?/g,
              ""
            )
            .trim();

          
          baseTitle = baseTitle.replace(/[\(\)\[\]_\-]/g, " ").trim(); 

          baseTitle = baseTitle.replace(/\s+/g, " ").trim();

          galleryItems.push({
            src,
            title: capitalizeFirstLetter(baseTitle),
            category,
          });
        }
      }
    }
  } catch (error) {
    console.error("Error reading gallery data:", error);
  }

  galleryItems.sort((a, b) => a.title.localeCompare(b.title));

  return {
    items: galleryItems,
    categories: Array.from(categoriesSet).sort(),
  };
}

function formatCategoryName(name: string): string {
  return name
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
