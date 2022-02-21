export const routes = {
    PLAY: "/play",
    MAPS: "/maps",
};

export function navigateTo(route: string) {
    document.location.href = route;
}

export default {
    routes,
    navigateTo,
};
