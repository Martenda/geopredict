function strToBoolean(str: string): boolean {
    if (str == null || typeof str !== "string" || (str !== "true" && str !== "false")) {
        throw new Error(`Expected a string representing a boolean value, but got ${str}`);
    }

    return JSON.parse(str.toLowerCase());
}

export default strToBoolean;
