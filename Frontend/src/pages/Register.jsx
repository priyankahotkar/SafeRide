import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'passenger',
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Register attempt:', formData);
    }
  };

  const handleGoogleSignUp = () => {
    console.log('Google Sign-Up clicked');
    // Backend implementation will go here
  };

  return (
    <main className="auth-page register-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Join SafeRide</h1>
            <p>Create your account and start your safe journey</p>
          </div>

          <div className="user-type-selector">
            <label className="type-option">
              <input
                type="radio"
                name="userType"
                value="passenger"
                checked={formData.userType === 'passenger'}
                onChange={handleChange}
              />
              <span className="type-label">
                <span className="type-icon">👨‍💼</span>
                Passenger
              </span>
            </label>
            <label className="type-option">
              <input
                type="radio"
                name="userType"
                value="driver"
                checked={formData.userType === 'driver'}
                onChange={handleChange}
              />
              <span className="type-label">
                <span className="type-icon">🚗</span>
                Driver
              </span>
            </label>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`form-input ${errors.fullName ? 'error' : ''}`}
                placeholder="Jane Doe"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '👁️‍🗨️' : '👁️'}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? '👁️‍🗨️' : '👁️'}
                </button>
              </div>
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>

            <label className="checkbox-group">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              <span>I agree to the <Link to="#" className="terms-link">Terms of Service</Link> and <Link to="#" className="terms-link">Privacy Policy</Link></span>
            </label>
            {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}

            <button type="submit" className="btn-submit">Create Account</button>
          </form>

          <div className="divider">
            <span>Or sign up with</span>
          </div>

          <button className="btn-google" onClick={handleGoogleSignUp}>
            <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </button>

          <p className="auth-footer">
            Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
          </p>
        </div>

        <div className="auth-visual">
          <div className="visual-content">
            <h2>Empowering Women Through Transportation</h2>
            <p>Join our community of women drivers and passengers. SafeRide is more than a ride-sharing app—it's a movement towards safer, more empowered women.</p>
            <ul className="visual-features">
              <li>
                <span className="feature-icon">👩</span>
                <div>
                  <strong>Women-Only Network</strong>
                  <p>Driven by women, for women</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">💰</span>
                <div>
                  <strong>Fair Earnings</strong>
                  <p>Drivers earn competitive rates</p>
                </div>
              </li>
              <li>
                <span className="feature-icon">⭐</span>
                <div>
                  <strong>Community Support</strong>
                  <p>Join a supportive community</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
