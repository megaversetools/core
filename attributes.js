/* Unless otherwise noted, all calculations are based on Rifts Ultimate Edition PDF Edition (RUE), April 2016 pages 281-284 */

/* ========== I.Q. ========== */
function calculateSkillBonus(iq) {
    if (iq >= 31) {
        return (Math.floor(iq / 5) - 6) * 2 + 16;
    } else if (iq >= 16) {
        return iq - 14;
    } else {
        return 0;
    }
}

function calculateIllusionSave(iq) {
    var result = 0;

    if (iq >= 49) {
        result = 7;
    } else if (iq >= 31) {
        result = Math.floor((iq - 31) / 3) + 1;
    } else {
        result = 0;
    }

    return result;
}

/* ========== M.E. ========== */
function calculatePsiSave(me) {
    if (me >= 30) {
        return 8;
    } else if (me >= 16) {
        return Math.floor(me / 2) - 7;
    } else {
        return 0;
    }
}

function calculateInsanitySave(me) {
    if (me >= 30) {
        return 13;
    } else if (me >= 20) {
        return me - 17;
    } else if (me >= 16) {
        return Math.floor(me / 2) - 7;
    } else {
        return 0;
    }
}

function calculatePossessionSave(me) {
    if (me >= 60) {
        return 4;
    } else if (me >= 50) {
        return 3;
    } else if (me >= 40) {
        return 2;
    } else if (me >= 30) {
        return 1;
    } else {
        return 0;
    }
}

/* ========== M.A. ========== */
function calculateTrustIntimidate(ma) {
    if (ma >= 30) {
        return 97;
    } else if (ma === 29) {
        return 96;
    } else if (ma === 28) {
        return 94;
    } else if (ma >= 25) {
        return ((ma - 24) * 4) + 80;
    } else if (ma >= 16) {
        return ((ma - 16) * 5) + 40;
    } else {
        return 0;
    }
}

/* ========== P.S. ========== */
function calculateSdcDmgBonus(ps) {
    if (ps >= 16) {
        return ps - 15;
    } else {
        return 0;
    }
}

/* ========== P.P. ========== */
function calculateStrPryDodBonus(pp) {
    if (pp >= 30) {
        return 8;
    } else if (pp >= 16) {
        return Math.floor(pp / 2) - 7;
    } else {
        return 0;
    }
}

function calculatePpInitiativeBonus(pp) {
    if (pp > 45) {
        return 6;
    } else if (pp >= 43) {
        return 5;
    } else if (pp >= 40) {
        return 4;
    } else if (pp >= 37) {
        return 3;
    } else if (pp >= 34) {
        return 2;
    } else if (pp >= 31) {
        return 1;
    } else {
        return 0;
    }
}

/* ========== P.E. ========== */
function calculateMagicPoisonSave(pe) {
    if (pe >= 30) {
        return 8;
    } else if (pe >= 16) {
        return Math.floor(pe / 2) - 7;
    } else {
        return 0;
    }
}

function calculateComaDeathSave(pe) {
    if (pe > 30) {
        return pe;
    } else if (pe >= 18) {
        return (pe - 15) * 2;
    } else if (pe === 17) {
        return 5;
    } else if (pe === 16) {
        return 4;
    } else {
        return 0;
    }
}

/* ========== P.B. ========== */
function calculateCharmImpress(pb) {
    if (pb >= 30) {
        return 92;
    } else if (pb === 29) {
        return 90;
    } else if (pb === 28) {
        return 86;
    } else if (pb === 27) {
        return 83;
    } else if (pb >= 16) {
        return (pb - 10) * 5;
    } else {
        return 0;
    }
}

/* ========== Spd. ========== */
function convertSpdToMph(spd) {
    if (spd > 0) {
        // Spd * 20 yards/min * 60 mins = 1200 yards/hour; 1760 yards in a mile
        return (spd * 1200) / 1760;
    } else {
        return 0;
    }
}

function convertSpdToKph(spd) {
    if (spd > 0) {
        // Convert MPH to KPH (standard conversion factor: 1 mile = 1.609344 km)
        return convertSpdToMph(spd) * 1.609344;
    } else {
        return 0;
    }
}
