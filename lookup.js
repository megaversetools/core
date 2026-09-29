/*  Lookup tables and helper functions for character calculations */

function calculateBaseSaveVsPsionics(level) {
    if (level === "minor" || level === "major") {
        return 12;
    } else if (level === "master") {
        return 10;
    } else if (level === "none") {
        return 14;
    } else {
        return 0;
    }
}

function getAlignmentCategory(alignment) {
    if (alignment === "principled" || alignment === "scrupulous") {
        return "good";
    } else if (alignment === "unscrupulous" || alignment === "anarchist") {
        return "selfish";
    } else if (alignment === "aberrant" || alignment === "miscreant" || alignment === "diabolical") {
        return "evil";
    } else {
        return "";
    }
}
