type RouteName = "/play" | "/maps";

export const routes = {
    PLAY: "/play",
    MAPS: "/maps",
};

export function navigateTo(routeName: RouteName) {
    document.location.href = routeName;
}

export default {
    routes,
    navigateTo,
};
