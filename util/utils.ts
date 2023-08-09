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

    document.querySelector(`#${parentId} #${activeLink}`)?.classList.add("active");

    return activeLink;
}

export function isMobile(windowWidth: number) {
    return windowWidth < 768;
}