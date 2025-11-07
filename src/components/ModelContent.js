import React, {useState} from 'react';
const StepOne = ({ setModalStep }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address (e.g., must contain @).');
      return;
    }

    setError(''); 
    setModalStep(2); 
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="text-center p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Register or Sign In</h2>
      <p className="text-gray-600 mb-6">Join 10 million+ Canadians...</p>
      
      <ul className="text-left text-gray-700 mb-6 list-disc list-inside space-y-1">
        <li>Faster listings...</li>
        <li>See 27% more homes...</li>
        <li>Instant access to photos & features</li>
        <li>Save searches & homes across devices</li>
      </ul>
      <div className="mb-4">
        <input
          type="text" 
          required
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
          className={`w-full rounded-md border py-2 text-sm pl-3 pr-10 focus:ring-blue-500 focus:border-blue-500 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}

      <button
        type="submit"
        className="w-full py-3 px-4 rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-900 transition"
      >
        Show me the photos! 📸
      </button>
      
      <p className="mt-4 text-xs text-gray-500">
        Enter your email address below...
      </p>
    </form>
  );
};
const StepTwo = ({ setModalStep }) => {
    const handleFinalSubmit = (e) => {
        e.preventDefault();
        setModalStep(3); 
    };

    return (
<form onSubmit={handleFinalSubmit} className="text-center p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Almost Done!</h2>
            <p className="text-gray-600 mb-6 text-left">
                To finish creating your account... require a **name and phone number**.
            </p>
            <div className="mb-4">
                <input type="text" required placeholder="Full name" className="w-full rounded-md border-gray-300 pl-3 pr-10 py-2 text-sm border focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="mb-6">
                <input type="tel" required placeholder="Phone" className="w-full rounded-md border-gray-300 pl-3 pr-10 py-2 text-sm border focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <button
                type="submit"
                className="w-full py-3 px-4 rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-900 transition"
            >
                Create Account ➡️
            </button>
            
            <div className="bg-green-100 text-green-800 p-3 rounded-md mt-4 text-sm font-medium">
                Remember: Confirm your account by checking your email!
            </div> 
        </form>
    );
};
const StepThree = ({ setModalStep }) => {
    const handleVerify = (e) => {
        e.preventDefault();
        setModalStep(4); 
    }

    return (
<form onSubmit={handleVerify} className="text-center p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">VState has sent you an email.</h2>
            <p className="text-gray-600 mb-6">
              Check your inbox to finish creating your full account  
            </p>
            <button
                type="submit"
                className="w-full py-3 px-4 rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-700 transition"
            >
                I have verified Email already
            </button>

            <button
                type="submit"
                className="w-full mt-2 py-3 px-4 rounded-md shadow-sm text-base font-medium text-black bg-white hover:bg-white transition"
            >
                Resend Email Verification
            </button>
        </form>
    );
};
const StepFour = ({ onClose }) => {
    const handleAcceptAndFinish = (e) => {
        e.preventDefault();
        console.log("Terms accepted. Final Registration Complete!");
        onClose(); 
    };

    return (
        <form onSubmit={handleAcceptAndFinish} className="text-center p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms and Conditions</h2>
            
            <div className="text-left text-sm text-gray-700 h-48 overflow-y-auto border p-3 rounded-md mb-4 bg-gray-50">
                <p className="font-semibold mb-2">Important Legal Notice</p>
                <p className="mb-2">By checking the box below and clicking "Agree and Finish," you are confirming that you have read and agreed to the following terms...</p>
                <p className="font-semibold mt-3">... More Policy Details ...</p>
            </div>
            <div className="text-left mb-6">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" required className="form-checkbox text-blue-600 rounded" />
                    <span className="text-sm text-gray-800">
                        I have read and agree to the <a href="agree" className="text-blue-600 underline">Terms of Use</a> and <a href="use" className="text-blue-600 underline">Privacy Policy</a>.
                    </span>
                </label>
            </div>

            {/* Final Button */}
            <button
                type="submit"
                className="w-full py-3 px-4 rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-700 transition"
            >
                Agree and Finish
            </button>
        </form>
    );
};
const ModalContent = ({ currentStep, setModalStep, onClose }) => {
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne setModalStep={setModalStep} />;
      case 2:
        return <StepTwo setModalStep={setModalStep} />;
      case 3:
        return <StepThree setModalStep={setModalStep} />;
      case 4:
        return <StepFour onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none z-10"
      >
        &times;
      </button>

      {renderStep()}
    </div>
  );
};

export default ModalContent;