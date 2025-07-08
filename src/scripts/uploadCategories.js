import { db } from "../lib/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { categories } from "../data/navBar/categories";

export async function uploadCategoriesToFirestore() {
    for (const category of categories) {
        const slug = category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"); // e.g., "Men's Fashion" -> "men-s-fashion"

        try {
            await setDoc(doc(collection(db, "categories"), slug), {
                title: category.title,
                image: category.image || null,
                subcategories: category.subcategories
            });

            console.log(`✅ Uploaded: ${category.title}`);
        } catch (error) {
            console.error(`❌ Failed to upload ${category.title}:`, error);
        }
    }

    console.log("🔥 Upload complete.");
}
