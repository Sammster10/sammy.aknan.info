export function updateActiveLink(parentId: string, path: string, oldActiveLink: string) {
    const query = `#${parentId} ${oldActiveLink ? "#" : ""}${oldActiveLink}`;
    document.querySelector(query)?.classList.remove("active");
    let activeLink = "";

    if (path === "/" || path === "") {
        activeLink = "home-link";
    } else if (path.startsWith("/about")) {
        activeLink = "about-link";
    } else if (path.startsWith("/services")) {
        activeLink = "services-link";
    } else if (path.startsWith("/contact")) {
        activeLink = "contact-link";
    } else if (path.startsWith("/portfolio")) {
        activeLink = "portfolio-link";
    }

    if (!activeLink) {
        return "";
    }

    document.querySelector(`#${parentId} #${activeLink}`)?.classList.add("active");

    return activeLink;
}

export function isMobile(windowWidth: number) {
    return windowWidth < 768;
}

export function getTheme() {
    return window.localStorage.getItem("theme") || "dark";
}

export function setTheme(theme: string) {
    window.localStorage.setItem("theme", theme);
}

export function isLightTheme() {
    return getTheme() === "light";
}

export function isDarkTheme() {
    return getTheme() === "dark";
}