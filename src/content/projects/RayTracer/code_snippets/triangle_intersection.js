const IntersectionCode = `
bool UTIL::moller_trumbore(
	const Ray& ray, 
	const Vector &v0, const Vector &v1, const Vector &v2, 
	float &t, float &u, float &v
) {
	
	const float epsilon = 0.00001f;
	Vector edge1, edge2, h, s, q;
	float a, f;

	edge1 = v1 - v0;
	edge2 = v2 - v0;

	h = Vector::cross_product(ray.direction, edge2);
	a = Vector::dot_product(edge1, h);

	if (a > -epsilon && a < epsilon) return false;

	f = 1.0f/a;
	s = ray.position - v0;
	u = f * Vector::dot_product(s, h);

	if (u < 0.0f || u > 1.0f) return false; // Ensure valid barycentric coordinates (i.e. not outside triangle).

	q = Vector::cross_product(s, edge1);
	v = f * Vector::dot_product(ray.direction, q);

	if (v < 0.0f || u + v > 1.0f) return false; // Barycentric coord check again.

	t = f * Vector::dot_product(edge2, q);

	if (t > epsilon) return true;
	return false; // Ignore intersections behind the ray origin.
}`

export default IntersectionCode;

