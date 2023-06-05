const IntersectionCode = `
vector<Hit> Plane::intersection(Ray ray) {
    
    vector<Hit> hits;

    Vector ro = ray.position - center;
    float dot_product = ro.dot(normal);
    if (dot_product == 0) return hits;
    if (dot_product < 0 && !twoside) return hits;

    float denominator = ray.direction.dot(normal);
    if (fabs(denominator) < 0.0001f) return hits;

    float t = -dot_product / denominator; // Unbounded hit on surface plane t

    // Calculate against 3D Plane equation: c + u x d1 + v x d2
    Vector hit_pos = ray.position + t * ray.direction;

    Vector center_offset = Vector::v_abs(hit_pos - center);
    float ortho_1 = fabs(tangent.dot(center_offset));
    float ortho_2 = fabs(bitangent.dot(center_offset));

    if (ortho_1 < tangent_size && ortho_2 < bitangent_size) {        
        // [Abbreviated] ...Emplace new Hit(t) obj to back of hits
    }

    return hits;
}`

export default IntersectionCode;