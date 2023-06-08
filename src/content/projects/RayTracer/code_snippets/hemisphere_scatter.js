const Code = `
Vector UTIL::hemisphere_scatter() {
    const float u = UTIL::rand_float(0.0f, 0.999999f);
    const float v = UTIL::rand_float(0.0f, 0.999999f);
    const float theta = 0.5f * acos(UTIL::clamp(1.0f - 2.0f * u, -1.0f, 1.0f));
    const float phi   = 2 * M_PI * v;
    const float cost  = cos(theta);

    return UTIL::spherical_to_cartesian(theta, phi);
    // ...and conversion to world space when needed outside this function.
}`

export default Code;

