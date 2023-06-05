const IntersectionCode = `
vector<Hit> Sphere::intersection(Ray ray)
{
	vector<Hit> hits;

	// Note: simplification of quadratic formula by assuming b = some 2n.
	Vector ray_origin_to_center = ray.position - center;
	float a = ray.direction.length_squared();
	float b_over_two = ray_origin_to_center.dot(ray.direction);
	float c = ray_origin_to_center.length_squared() - radius * radius;
	float discriminant = b_over_two * b_over_two - a * c;

	if (discriminant < 0.0f) return hits; // No intersection if discrim < 0

	float sqrt_d = sqrtf(discriminant);

	// Check smallest root first
	float t = (-b_over_two - sqrt_d) / a;
    // [Abbreviated] ...Emplace new Hit(t) obj to back of hits

    // Check larger root
	t =  (-b_over_two + sqrt_d) / a;
    // [Abbreviated] ...Emplace new Hit(t) obj to back of hits

    return hits;
}`

export default IntersectionCode;