import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Navbar_section": {
      "callbacks": {}
    },
    "mng_navbar": {
      "callbacks": {}
    },
    "header": {
      "callbacks": {}
    },
    "mg_header": {
      "callbacks": {}
    },
    "Hero_section": {
      "callbacks": {}
    },
    "mng_hero": {
      "callbacks": {}
    },
    "bottom_multiple_icon": {
      "callbacks": {}
    },
    "Cover_section": {
      "callbacks": {}
    },
    "mng_cover": {
      "callbacks": {}
    },
    "content": {
      "callbacks": {}
    },
    "left_content_textbox": {
      "callbacks": {}
    },
    "mng_content_textbox": {
      "callbacks": {}
    },
    "bold_content_textbox": {
      "callbacks": {}
    },
    "mini_text": {
      "callbacks": {}
    },
    "cover_links": {
      "callbacks": {}
    },
    "content_button": {
      "callbacks": {}
    },
    "mng_cover_btn": {
      "callbacks": {}
    },
    "right_content_img": {
      "callbacks": {}
    },
    "Album_section": {
      "callbacks": {}
    },
    "mng_album": {
      "callbacks": {}
    },
    "top_album": {
      "callbacks": {}
    },
    "mng_service": {
      "callbacks": {}
    },
    "service_container": {
      "callbacks": {}
    },
    "bottom_album": {
      "callbacks": {}
    },
    "album1": {
      "callbacks": {}
    },
    "album_icon1": {
      "callbacks": {}
    },
    "album1_mini_textbox": {
      "callbacks": {}
    },
    "album1_list": {
      "callbacks": {}
    },
    "album1_orderlist2": {
      "callbacks": {}
    },
    "album1_orderlist_textbox2": {
      "callbacks": {}
    },
    "album1_orderlist1": {
      "callbacks": {}
    },
    "album1_orderlist_textbox_1": {
      "callbacks": {}
    },
    "album1_orderlist3": {
      "callbacks": {}
    },
    "album1_orderlist_textbox3": {
      "callbacks": {}
    },
    "album2": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "Flex51": {
      "callbacks": {}
    },
    "Div24": {
      "callbacks": {}
    },
    "Flex52": {
      "callbacks": {}
    },
    "Div26": {
      "callbacks": {}
    },
    "Flex53": {
      "callbacks": {}
    },
    "Div28": {
      "callbacks": {}
    },
    "Flex55": {
      "callbacks": {}
    },
    "Flex56": {
      "callbacks": {}
    },
    "album3": {
      "callbacks": {}
    },
    "Flex61": {
      "callbacks": {}
    },
    "Flex58": {
      "callbacks": {}
    },
    "Div30": {
      "callbacks": {}
    },
    "Flex59": {
      "callbacks": {}
    },
    "Div32": {
      "callbacks": {}
    },
    "Flex60": {
      "callbacks": {}
    },
    "Div34": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "Flex63": {
      "callbacks": {}
    },
    "Slider_section": {
      "callbacks": {}
    },
    "mng_slider": {
      "callbacks": {}
    },
    "top_slider": {
      "callbacks": {}
    },
    "mng_top_slider": {
      "callbacks": {}
    },
    "left_project_txtbox": {
      "callbacks": {}
    },
    "top_project_textbox": {
      "callbacks": {}
    },
    "bottom_bold_textbox": {
      "callbacks": {}
    },
    "top_project_bold_txtbox1": {
      "callbacks": {}
    },
    "bottom_project_bold_txtbox2": {
      "callbacks": {}
    },
    "right_project_btn": {
      "callbacks": {}
    },
    "mng_project_btn": {
      "callbacks": {}
    },
    "bottom_slider": {
      "callbacks": {}
    },
    "Flex312": {
      "callbacks": {}
    },
    "Flex344": {
      "callbacks": {}
    },
    "Flex342": {
      "callbacks": {}
    },
    "Flex341": {
      "callbacks": {}
    },
    "Flex340": {
      "callbacks": {}
    },
    "Flex343": {
      "callbacks": {}
    },
    "Div102": {
      "callbacks": {}
    },
    "Flex349": {
      "callbacks": {}
    },
    "Flex347": {
      "callbacks": {}
    },
    "Flex376": {
      "callbacks": {}
    },
    "Flex375": {
      "callbacks": {}
    },
    "Flex348": {
      "callbacks": {}
    },
    "Div103": {
      "callbacks": {}
    },
    "Flex364": {
      "callbacks": {}
    },
    "Flex362": {
      "callbacks": {}
    },
    "Flex361": {
      "callbacks": {}
    },
    "Flex360": {
      "callbacks": {}
    },
    "Flex363": {
      "callbacks": {}
    },
    "Div106": {
      "callbacks": {}
    },
    "Flex383": {
      "callbacks": {}
    },
    "Flex381": {
      "callbacks": {}
    },
    "Div109": {
      "callbacks": {}
    },
    "Flex382": {
      "callbacks": {}
    },
    "Flex380": {
      "callbacks": {}
    },
    "Flex379": {
      "callbacks": {}
    },
    "Flex393": {
      "callbacks": {}
    },
    "Flex391": {
      "callbacks": {}
    },
    "Div111": {
      "callbacks": {}
    },
    "Flex392": {
      "callbacks": {}
    },
    "Flex390": {
      "callbacks": {}
    },
    "Flex389": {
      "callbacks": {}
    },
    "Flex394": {
      "callbacks": {}
    },
    "Flex395": {
      "callbacks": {}
    },
    "Flex396": {
      "callbacks": {}
    },
    "Flex338": {
      "callbacks": {}
    },
    "Flex397": {
      "callbacks": {}
    },
    "Flex399": {
      "callbacks": {}
    },
    "Flex401": {
      "callbacks": {}
    },
    "Flex402": {
      "callbacks": {}
    },
    "Flex403": {
      "callbacks": {}
    },
    "Flex404": {
      "callbacks": {}
    },
    "Flex400": {
      "callbacks": {}
    },
    "Flex405": {
      "callbacks": {}
    },
    "Flex410": {
      "callbacks": {}
    },
    "Flex411": {
      "callbacks": {}
    },
    "Flex412": {
      "callbacks": {}
    },
    "Flex416": {
      "callbacks": {}
    },
    "Flex413": {
      "callbacks": {}
    },
    "Flex414": {
      "callbacks": {}
    },
    "Flex415": {
      "callbacks": {}
    },
    "Flex420": {
      "callbacks": {}
    },
    "Flex417": {
      "callbacks": {}
    },
    "Flex418": {
      "callbacks": {}
    },
    "Flex419": {
      "callbacks": {}
    },
    "Flex424": {
      "callbacks": {}
    },
    "Flex421": {
      "callbacks": {}
    },
    "Flex422": {
      "callbacks": {}
    },
    "Flex423": {
      "callbacks": {}
    },
    "Flex425": {
      "callbacks": {}
    },
    "Flex426": {
      "callbacks": {}
    },
    "Flex431": {
      "callbacks": {}
    },
    "Flex433": {
      "callbacks": {}
    },
    "Flex435": {
      "callbacks": {}
    },
    "Div112": {
      "callbacks": {}
    },
    "Div113": {
      "callbacks": {}
    },
    "Flex434": {
      "callbacks": {}
    },
    "logo": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078ab3cfa1bca879adb93d1_Group%2070.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "arrow_icon1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "about": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "services": {
      "custom": {
        "text": "Services",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "project": {
      "custom": {
        "text": "Project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "blog": {
      "custom": {
        "text": "Blog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "bookcall": {
      "custom": {
        "text": "Book a call",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "top_trusted_by": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "icon1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logoipsum-5.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "icon2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logoipsum-6.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "icon3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_ipsum3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "icon4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_ipsum4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "bold__text1": {
      "custom": {
        "text": "I design Products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "bold_text2": {
      "custom": {
        "text": "that delights and inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "cover_download_link": {
      "custom": {
        "text": "Download CV",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "arrow_icon2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "back_btn": {
      "callbacks": {}
    },
    "cover_button": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "cover_img": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60ad1c2b0e1d633fc7ef2e69_Group%20160-min-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "bottom_bold_service_textbox": {
      "custom": {
        "text": "Design that solves problems, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "top_service_textbox": {
      "custom": {
        "text": "SERVICES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "album1_bold_txt": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icon1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "album1_mini_txt": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "album1_circle2": {
      "callbacks": {}
    },
    "album1_orderlist_text": {
      "custom": {
        "text": "Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "album1_circle1": {
      "callbacks": {}
    },
    "TextBox30": {
      "custom": {
        "text": "Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "album1_circle3": {
      "callbacks": {}
    },
    "album1_orderlist_text3": {
      "custom": {
        "text": "Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div25": {
      "callbacks": {}
    },
    "TextBox33": {
      "custom": {
        "text": "Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div27": {
      "callbacks": {}
    },
    "TextBox34": {
      "custom": {
        "text": "Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div29": {
      "callbacks": {}
    },
    "TextBox35": {
      "custom": {
        "text": "Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icon3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div31": {
      "callbacks": {}
    },
    "TextBox38": {
      "custom": {
        "text": "Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div33": {
      "callbacks": {}
    },
    "TextBox39": {
      "custom": {
        "text": " Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div35": {
      "callbacks": {}
    },
    "TextBox40": {
      "custom": {
        "text": "Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icon2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "project_txt": {
      "custom": {
        "text": "PROJECTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "project_bold_text1": {
      "custom": {
        "text": "I bring results. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "project_bold_text2": {
      "custom": {
        "text": "My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "project_button": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "project_back_btn": {
      "callbacks": {}
    },
    "TextBox135": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image91": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image92": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_img4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox156": {
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image105": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image94": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_img5.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image99": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image100": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_img2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image108": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_img3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox163": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image107": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox161": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image112": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_img1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox168": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox169": {
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox167": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image111": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image113": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/left-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image114": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow-point-to-right.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox170": {
      "custom": {
        "text": "Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "custom": {
        "text": "latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
      "custom": {
        "text": "view all"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image115": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox179": {
      "custom": {
        "text": "April 16, 2021  .6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox180": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox181": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image116": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image117": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox182": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox183": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox184": {
      "custom": {
        "text": "April 16, 2021  .6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image118": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox185": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox186": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox187": {
      "custom": {
        "text": "April 16, 2021  .6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image119": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox188": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox189": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox190": {
      "custom": {
        "text": "April 16, 2021  .6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex432": {
      "callbacks": {}
    },
    "TextBox191": {
      "custom": {
        "text": "PRODUCT DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox192": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox193": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "navigation bar": {
    "Navigation_bar": {
      "callbacks": {}
    },
    "Hero_section": {
      "callbacks": {}
    },
    "Album_section": {
      "callbacks": {}
    },
    "Slider_section": {
      "callbacks": {}
    },
    "mng_slider": {
      "callbacks": {}
    },
    "whole_slider": {
      "callbacks": {}
    },
    "bottoms": {
      "callbacks": {}
    },
    "Flex282": {
      "callbacks": {}
    },
    "Flex283": {
      "callbacks": {}
    },
    "Flex285": {
      "callbacks": {}
    },
    "Flex290": {
      "callbacks": {}
    },
    "Flex288": {
      "callbacks": {}
    },
    "Flex287": {
      "callbacks": {}
    },
    "Flex286": {
      "callbacks": {}
    },
    "Div87": {
      "callbacks": {}
    },
    "Flex289": {
      "callbacks": {}
    },
    "Div88": {
      "callbacks": {}
    },
    "Flex295": {
      "callbacks": {}
    },
    "Flex293": {
      "callbacks": {}
    },
    "Flex292": {
      "callbacks": {}
    },
    "Flex291": {
      "callbacks": {}
    },
    "Div89": {
      "callbacks": {}
    },
    "Flex294": {
      "callbacks": {}
    },
    "Div90": {
      "callbacks": {}
    },
    "Flex300": {
      "callbacks": {}
    },
    "Flex298": {
      "callbacks": {}
    },
    "Flex297": {
      "callbacks": {}
    },
    "Flex296": {
      "callbacks": {}
    },
    "Div91": {
      "callbacks": {}
    },
    "Flex299": {
      "callbacks": {}
    },
    "Div92": {
      "callbacks": {}
    },
    "Flex305": {
      "callbacks": {}
    },
    "Flex303": {
      "callbacks": {}
    },
    "Flex302": {
      "callbacks": {}
    },
    "Flex301": {
      "callbacks": {}
    },
    "Div93": {
      "callbacks": {}
    },
    "Flex304": {
      "callbacks": {}
    },
    "Div94": {
      "callbacks": {}
    },
    "Flex310": {
      "callbacks": {}
    },
    "Flex308": {
      "callbacks": {}
    },
    "Flex307": {
      "callbacks": {}
    },
    "Flex306": {
      "callbacks": {}
    },
    "Div95": {
      "callbacks": {}
    },
    "Flex309": {
      "callbacks": {}
    },
    "Div96": {
      "callbacks": {}
    },
    "tops": {
      "callbacks": {}
    },
    "Flex278": {
      "callbacks": {}
    },
    "Flex275": {
      "callbacks": {}
    },
    "Flex268": {
      "callbacks": {}
    },
    "Flex276": {
      "callbacks": {}
    },
    "Flex269": {
      "callbacks": {}
    },
    "Div84": {
      "callbacks": {}
    },
    "Div85": {
      "callbacks": {}
    },
    "Div86": {
      "callbacks": {}
    },
    "Blogs_section": {
      "callbacks": {}
    },
    "Product_section": {
      "callbacks": {}
    },
    "Features_section": {
      "callbacks": {}
    },
    "Testimonial_section": {
      "callbacks": {}
    },
    "FAQ_section": {
      "callbacks": {}
    },
    "Footer": {
      "callbacks": {}
    },
    "Flex311": {
      "callbacks": {}
    },
    "Main_cover": {
      "callbacks": {}
    },
    "mngnavbar": {
      "callbacks": {}
    },
    "mng_hero": {
      "callbacks": {}
    },
    "mng_album": {
      "callbacks": {}
    },
    "TextBox107": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image76": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_img1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image77": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image78": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_img1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image79": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image80": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_img1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image81": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image82": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_img1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox119": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image83": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image84": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/slider_img1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex261": {
      "callbacks": {}
    },
    "Button10": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "custom": {
        "text": "My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "custom": {
        "text": "I bring results. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "custom": {
        "text": "PROJECTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "mng_blogs": {
      "callbacks": {}
    },
    "mng_product": {
      "callbacks": {}
    },
    "mng_features": {
      "callbacks": {}
    },
    "mng_bottom_testimonial": {
      "callbacks": {}
    },
    "mng_top_testimonal": {
      "callbacks": {}
    },
    "mng_top_faq": {
      "callbacks": {}
    },
    "mng_bottom_faq": {
      "callbacks": {}
    },
    "mng_footer": {
      "callbacks": {}
    },
    "Image85": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Webflow%20text.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image86": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Webflow%20icon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "mng_cover": {
      "callbacks": {}
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
