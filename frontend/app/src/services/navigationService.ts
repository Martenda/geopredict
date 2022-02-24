export const routes = {
    DEFAULT: "/",
    PLAY: "/play",
    MAPS: "/maps",
    LOGIN: "/login",
    SCORES: "/scores",
};

export function navigateTo(route: string) {
    document.location.href = route;
}

export default {
    routes,
    navigateTo,
};
