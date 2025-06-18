import fs from "fs";
import path from "path";

const PREFERRED_CATEGORY_ORDER = [
  "Doğum Günü",
  "Özel Gün",
  "Cupcake & Cake Pop",
  "Kurabiyeler",
];

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
    categories: Array.from(categoriesSet).sort((a, b) => {
      const indexA = PREFERRED_CATEGORY_ORDER.indexOf(a);
      const indexB = PREFERRED_CATEGORY_ORDER.indexOf(b);

      // If both are in the preferred order, sort by their index
      if (indexA !== -1 && indexB !== -1) {
        // (3)
        return indexA - indexB; // (3)
      }
      // If only A is in preferred order, A comes first
      if (indexA !== -1) {
        // (4)
        return -1; // (4)
      }
      // If only B is in preferred order, B comes first
      if (indexB !== -1) {
        // (5)
        return 1; // (5)
      }
      // If neither is in preferred order, sort alphabetically (fallback)
      return a.localeCompare(b); // (6)
    }),
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
