import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = token ? JSON.parse(token) : null;

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" 
                     style={{ width: '120px', height: '120px' }}>
                  <User size={60} color="white" />
                </div>
                <h1 className="card-title mb-4">Profile Details</h1>
              </div>
              
              <div className="fs-3 mb-4">
                <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;