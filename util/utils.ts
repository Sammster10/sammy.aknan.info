export function updateActiveLink(parentId: string, fullPath: string, oldActiveLink: string) {
    let elementId = "";
    if (fullPath.includes("#")) {
        elementId = fullPath.split("#")[1];
    }
    const query = `#${parentId} ${oldActiveLink ? "#" : ""}${oldActiveLink}`;
    document.querySelector(query)?.classList.remove("active");
    let activeLink;

    if (elementId === "about") {
        activeLink = "about-link";
        document.title = "Sammy | About";
    } else if (elementId === "services") {
        activeLink = "services-link";
        document.title = "Sammy | Services";
    } else if (elementId === "contact") {
        activeLink = "contact-link";
        document.title = "Sammy | Contact";
    } else if (elementId === "portfolio") {
        activeLink = "portfolio-link";
        document.title = "Sammy | Portfolio";
    } else if (elementId === "roadmap") {
        activeLink = "home-link";
        document.title = "Sammy | Roadmap";
    } else {
        activeLink = "home-link";
        document.title = "Sammy | Home";
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