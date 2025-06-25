import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (title) => {
    setActiveCategory((prev) => (prev === title ? null : title));
  };


  const categories = [
    {
      title: "Electronics",
      subcategories: [
        {
          title: "Devices",
          items: ["Smartphones", "Laptops", "Tablets", "Desktops"]
        },
        {
          title: "Accessories",
          items: ["Chargers", "Headphones", "Cases", "Cables"]
        }
      ]
    },
    {
      title: "Men's Fashion",
      subcategories: [
        {
          title: "Apparel",
          items: ["Shirts", "Pants", "Outerwear", "Suits"]
        },
        {
          title: "Footwear",
          items: ["Casual Shoes", "Formal Shoes", "Sneakers", "Sandals"]
        }
      ]
    },
    {
      title: "Women's Fashion",
      subcategories: [
        {
          title: "Apparel",
          items: ["Dresses", "Tops", "Outerwear", "Skirts"]
        },
        {
          title: "Footwear",
          items: ["Heels", "Flats", "Sandals", "Sneakers"]
        }
      ]
    },
    {
      title: "Kid's Fashion",
      subcategories: [
        {
          title: "Apparel",
          items: ["Shirts", "Pants", "Outerwear", "Dresses"]
        },
        {
          title: "Footwear",
          items: ["Sneakers", "Sandals", "Boots", "Casual Shoes"]
        }
      ]
    },
    {
      title: "Home & Kitchen",
      subcategories: [
        {
          title: "Kitchen",
          items: ["Cookware", "Utensils", "Appliances", "Storage"]
        },
        {
          title: "Home Decor",
          items: ["Furniture", "Bedding", "Wall Art", "Lighting"]
        }
      ]
    },
    {
      title: "Beauty & Fragrance",
      subcategories: [
        {
          title: "Makeup",
          items: ["Foundation", "Lipstick", "Mascara", "Blush"]
        },
        {
          title: "Skincare",
          items: ["Moisturizers", "Cleansers", "Serums", "Sunscreens"]
        },
        {
          title: "Fragrance",
          items: ["Perfume", "Cologne", "Body Mist", "Essential Oils"]
        }
      ]
    },
    {
      title: "Baby",
      subcategories: [
        {
          title: "Feeding",
          items: ["Bottles", "High Chairs", "Feeding Tools"]
        },
        {
          title: "Clothing",
          items: ["Onesies", "Pajamas", "Outerwear", "Shoes"]
        }
      ]
    },
    {
      title: "Toys",
      subcategories: [
        {
          title: "Educational",
          items: ["Learning Toys", "Puzzles", "STEM Kits", "Building Blocks"]
        },
        {
          title: "Action & Play",
          items: ["Action Figures", "Remote Control Cars", "Stuffed Animals", "Playsets"]
        }
      ]
    },
    {
      title: "Sports & Outdoors",
      subcategories: [
        {
          title: "Sports",
          items: ["Basketball", "Soccer", "Baseball", "Tennis"]
        },
        {
          title: "Outdoor",
          items: ["Camping", "Hiking", "Cycling", "Fishing"]
        }
      ]
    },
    {
      title: "Health & Nutrition",
      subcategories: [
        {
          title: "Vitamins & Supplements",
          items: ["Multivitamins", "Protein Powders", "Omega-3", "Probiotics"]
        },
        {
          title: "Personal Care",
          items: ["Oral Care", "Feminine Care", "First Aid", "Massage Tools"]
        }
      ]
    },
    {
      title: "Automotive",
      subcategories: [
        {
          title: "Interior",
          items: ["Seat Covers", "Floor Mats", "Steering Wheel Covers", "Car Organizers"]
        },
        {
          title: "Exterior",
          items: ["Car Covers", "Mirrors", "Lights", "Decals & Stickers"]
        }
      ]
    },
    {
      title: "Stationary",
      subcategories: [
        {
          title: "Writing",
          items: ["Pens", "Pencils", "Markers", "Highlighters"]
        },
        {
          title: "Organization",
          items: ["Notebooks", "Binders", "Folders", "Desk Accessories"]
        }
      ]
    },
    {
      title: "Books & Media",
      subcategories: [
        {
          title: "Books",
          items: ["Fiction", "Non-fiction", "Biographies", "Textbooks"]
        },
        {
          title: "Media",
          items: ["DVDs", "CDs", "Digital Downloads", "Magazines"]
        }
      ]
    },
    {
      title: "Food",
      subcategories: [
        {
          title: "Snacks",
          items: ["Chips", "Nuts", "Biscuits", "Chocolate"]
        },
        {
          title: "Pantry",
          items: ["Rice", "Pasta", "Canned Goods", "Spices"]
        }
      ]
    }
  ];


  return (
    <>
      <nav className="relative bg-[#84C7D0] px-4 py-3 flex items-center justify-center text-[#343330] z-10">
        <Link to="/" className="font-bold text-xl absolute left-5">Omnia</Link>
        <div className="flex justify-end items-center gap-4 w-full">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search-icon lucide-search text-white">
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-shopping-cart-icon lucide-shopping-cart text-white">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-heart-icon lucide-heart text-white">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu-icon lucide-menu text-white">
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed top-0 h-full w-full bg-black opacity-30 z-20 ${menuOpen ? 'block' : 'hidden'}`}></div>
      <div
        className={`
          fixed top-0 right-0 h-full w-[70vw] bg-[#75DDDD] 
          transition-all duration-300 ease-in-out z-30
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='absolute right-2 top-2'>
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x-icon lucide-x text-white">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div>
          <ul className="flex flex-col p-4 gap-4">
            <li><Link to="/registration">Sign Up</Link></li>
          </ul>
        </div>
        <div className="m-auto w-[70%] h-px bg-black"></div>
        <div>
          <ul className="flex flex-col p-4 gap-4">
            {categories.map((category) => (
              <li key={category.title}>
                {/* Main Category Button */}
                <button
                  className="flex w-full items-center justify-between"
                  onClick={() => handleClick(category.title)}
                >
                  <p className="font-semibold">{category.title}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${activeCategory === category.title ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Subcategories */}
                {activeCategory === category.title && (
                  <div className="mt-2 pl-4 flex flex-col gap-3">
                    {category.subcategories.map((sub) => (
                      <div key={sub.title}>
                        <p className="font-medium text-gray-700">{sub.title}</p>
                        <ul className="list-disc pl-5 text-gray-600">
                          {sub.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

        </div>
      </div>

      <nav className="hidden bg-[#75DDDD] text-white md:flex justify-center items-center gap-5 py-2">
      </nav>
    </>
  );
}
