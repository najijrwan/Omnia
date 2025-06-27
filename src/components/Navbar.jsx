import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (title) => {
    setActiveCategory((prev) => (prev === title ? null : title));
  };

  const scrollRef = useRef();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 1000;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
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
      <nav className="bg-secondary px-4 py-3 flex items-center sm:justify-around sm:gap-10 text-white z-10">
        <div className='relative mr-15 md:mr-6 flex'>
          <img src="/Omnia.png" alt="Omnia" className='size-12 block  top-0 left-0' />
          <Link to="/" className="font-bold text-xl flex justify-start items-center text-base-1"><i>Omnia</i></Link>
        </div>
        <div className={`
              fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-main w-[80vw] h-10 rounded-lg flex flex-grow z-10
              sm:block sm:static sm:top-0 sm:right-0 sm:translate-0 sm:w-full
              ${searchOpen ? 'block' : 'hidden'}`}>
          <input
            type="text" onClick={(e) => e.stopPropagation()}
            placeholder='What do you wish to find ?'
            className='
              w-full h-10 focus:outline-amber-50 focus:outline-1 pl-10 rounded-[inherit] focus:placeholder-transparent border border-base-1 outline-transparent bg-secondary
              sm:bg-main sm:text-black sm:placeholder-black sm:border-black sm:border sm:focus:outline-black' />
          <svg xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search-icon lucide-search text-base-1 sm:text-base-1 absolute top-1.5 left-1.5">
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <button className='text-secondary bg-base-1 absolute right-0 h-full px-5 rounded-tr-[inherit] rounded-br-[inherit] sm:hidden'>
            Find
          </button>
        </div>
        <div className="flex justify-end items-center gap-4 ml-auto sm:ml-0">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className='sm:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search-icon lucide-search text-base-1 sm:absolute sm:left-0 sm:top-1.5 sm:ml-2">
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
              className="lucide lucide-shopping-cart-icon lucide-shopping-cart text-base-1">
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
              className="lucide lucide-heart-icon lucide-heart text-base-1">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-user-round-icon lucide-circle-user-round text-base-1">
              <path d="M18 20a6 6 0 0 0-12 0" />
              <circle cx="12" cy="10" r="4" />
              <circle cx="12" cy="12" r="10" />
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
              className="lucide lucide-menu-icon lucide-menu text-base-1">
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Scrollable Nav Container */}
      <div className="relative hidden md:block bg-main border-b border-b-secondary/30">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-base-1 to-transparent px-2 h-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-base-1 to-transparent px-2 h-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Scrollable Nav */}
        <nav
          ref={scrollRef}
          className="flex overflow-x-auto whitespace-nowrap hide-scrollbar scroll-smooth mx-9"
        >
          {categories.map((category) => (
            <button
              key={category.title}
              className="text-sm font-bold border-b-[4px] border-transparent hover:border-b-base-1 hover:text-secondary transition h-full py-2 px-4 whitespace-nowrap"
            >
              {category.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Single overlay */}
      {(menuOpen || searchOpen) && (
        <div
          className={`fixed top-0 h-full w-full bg-black opacity-30 ${searchOpen ? 'opacity-70' : 'opacity-50 z-10'}`}
          onClick={() => {
            if (menuOpen) setMenuOpen(false);
            if (searchOpen) setSearchOpen(false);
          }}
        />
      )}


      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[70vw] bg-secondary
          transition-all duration-300 ease-in-out z-30 overflow-y-scroll
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
            className="lucide lucide-x-icon lucide-x text-base-1">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className=''>
          <ul className="flex flex-col p-4 gap-4 mt-6">
            {categories.map((category) => (
              <li key={category.title}>
                {/* Main Category Button */}
                <button
                  className="flex w-full items-center justify-between"
                  onClick={() => handleClick(category.title)}
                >
                  <p className="font-semibold text-base-1">{category.title}</p>
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
                    className={`transition-transform text-base-1 ${activeCategory === category.title ? "rotate-180 text-base-2" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Subcategories */}
                {activeCategory === category.title && (
                  <div className="mt-2 pl-4 flex flex-col gap-3">
                    {category.subcategories.map((sub) => (
                      <div key={sub.title}>
                        <p className="font-[300] text-main">{sub.title}</p>
                        <ul className="list-disc pl-5 text-base-2">
                          {sub.items.map((item) => (
                            <li key={item} className='underline'>{item}</li>
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
    </>
  );
}
