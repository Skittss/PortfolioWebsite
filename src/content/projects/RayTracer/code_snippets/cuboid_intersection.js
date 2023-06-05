const IntersectionCode = `
vector<Hit> Cuboid::intersection(Ray ray) {
    
    vector<Hit> hits;

    Vector local_ray_position = UTIL::world_to_local(ray.position, tangent, up, bitangent);
    Vector local_ray_dir = UTIL::world_to_local(ray.direction, tangent, up, bitangent);

    Vector half_bounds = Vector(width_ta, width_n, width_bt);
    Vector min_bound = pos - half_bounds;
    Vector max_bound = pos + half_bounds;
    Vector inv_dir = 1.0f / local_ray_dir;

    Vector negatives = Vector(
        inv_dir.x < 0,
        inv_dir.y < 0,
        inv_dir.z < 0
    );

    Vector t_min = inv_dir * (Vector::v_lerp(max_bound, min_bound, negatives) - local_ray_position);
    Vector t_max = inv_dir * (Vector::v_lerp(min_bound, max_bound, negatives) - local_ray_position);

    // Check x-y corner miss edge cases
    if (t_min.x > t_max.y || t_min.y > t_max.x) return hits;

    float t_near = t_min.x;
    float t_far  = t_max.x;
    Vector min_normal = Vector(-1.0f, 0.0f, 0.0f);
    Vector max_normal = Vector(1.0f, 0.0f, 0.0f);
    
    if (t_min.y > t_min.x) {t_near = t_min.y; min_normal = Vector(0.0f, 1.0f, 0.0f);} // Note +ve y is downwards in this renderer's convention
    if (t_max.y < t_max.x) {t_far  = t_max.y; max_normal = Vector(0.0f, -1.0f, 0.0f);}

    // Check x (or y, whichever is the relevant intersection) - z miss edge cases
    if (t_near > t_max.z || t_min.z > t_far) return hits;
    
    if (t_min.z > t_near) {t_near = t_min.z; min_normal = Vector(0.0f, 0.0f, -1.0f);}
    if (t_max.z < t_far)  {t_far  = t_max.z; max_normal = Vector(0.0f, 0.0f, 1.0f);}

    // Note there should *always* be two hits to a cuboid in regular euclidian space.
    // [Abbreviated] ...Emplace new Hit(t_near) obj to back of hits
    // [Abbreviated] ...Emplace new Hit(t_far) obj to back of hits

    return hits;
}`

export default IntersectionCode;