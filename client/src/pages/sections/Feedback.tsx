import { FC, useState } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const Feedback: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    feedbackType: 'general',
    comments: '',
    rating: '3'
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    // In a real application, you would send this data to your backend
  };
  
  return (
    <SectionPage 
      title="Feedback"
      prevSection={{
        title: "Conclusion",
        path: "/conclusion"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Your Input Matters</h3>
        <p className="mb-8">
          We value your feedback on our marketing plan. Your insights and suggestions will help us refine 
          our strategy and ensure we're addressing all key considerations. Please take a moment to share 
          your thoughts using the form below.
        </p>
        
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-wawaHeading text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
            <p className="text-green-600 mb-6">
              Your feedback has been submitted successfully. We appreciate your input and will take it into 
              consideration as we refine our marketing strategy.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 bg-wawa-red-600 text-white rounded-lg hover:bg-wawa-red-700 transition-colors"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm mb-12">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-wawa-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-wawa-gray-300 rounded-lg focus:ring-2 focus:ring-wawa-red-500 focus:border-wawa-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-wawa-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-wawa-gray-300 rounded-lg focus:ring-2 focus:ring-wawa-red-500 focus:border-wawa-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="department" className="block text-wawa-gray-700 font-medium mb-2">Department</label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-wawa-gray-300 rounded-lg focus:ring-2 focus:ring-wawa-red-500 focus:border-wawa-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="feedbackType" className="block text-wawa-gray-700 font-medium mb-2">Feedback Type</label>
                  <select
                    id="feedbackType"
                    name="feedbackType"
                    value={formData.feedbackType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-wawa-gray-300 rounded-lg focus:ring-2 focus:ring-wawa-red-500 focus:border-wawa-red-500"
                    required
                  >
                    <option value="general">General Feedback</option>
                    <option value="strategy">Strategy Suggestions</option>
                    <option value="budget">Budget Considerations</option>
                    <option value="execution">Execution Concerns</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="comments" className="block text-wawa-gray-700 font-medium mb-2">Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-wawa-gray-300 rounded-lg focus:ring-2 focus:ring-wawa-red-500 focus:border-wawa-red-500"
                  required
                ></textarea>
              </div>
              
              <div className="mb-8">
                <label className="block text-wawa-gray-700 font-medium mb-2">Overall Rating</label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-wawa-gray-600">Poor</span>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={rating.toString()}
                        checked={formData.rating === rating.toString()}
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-wawa-red-600"
                      />
                      <span className="ml-1 mr-3">{rating}</span>
                    </label>
                  ))}
                  <span className="text-sm text-wawa-gray-600">Excellent</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-wawa-red-600 text-white rounded-lg hover:bg-wawa-red-700 transition-colors"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        )}
        
        {/* Additional Resources */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Additional Ways to Provide Feedback</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Team Meetings</h4>
            <p className="text-sm">
              Regular marketing team meetings are held every Tuesday at 10:00 AM. Feel free to bring your 
              ideas and suggestions to these sessions.
            </p>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Email</h4>
            <p className="text-sm">
              Send detailed feedback or questions directly to the marketing team at 
              <a href="mailto:marketing@wawa.com" className="text-wawa-red-600 ml-1">marketing@wawa.com</a>.
            </p>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Suggestion Box</h4>
            <p className="text-sm">
              Anonymous feedback can be submitted through the digital suggestion box on the company intranet.
            </p>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};

export default Feedback; 