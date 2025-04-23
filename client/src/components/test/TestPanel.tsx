import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isFeatureEnabled } from '../../utils/featureToggles';

interface TestResult {
  name: string;
  success: boolean;
  message: string;
}

const TestPanel: FC = () => {
  if (!isFeatureEnabled('showTestPanel')) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);

  const runAuthTests = async () => {
    const tests: TestResult[] = [];

    // Test Registration
    try {
      const registerRes = await fetch('http://localhost:4100/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: `test${Date.now()}@test.com`,
          password: 'test123',
          firstName: 'Test',
          lastName: 'User'
        })
      });
      const registerData = await registerRes.json();
      
      tests.push({
        name: 'Registration',
        success: registerData.success,
        message: registerData.message
      });

      if (registerData.token) {
        // Test Protected Route
        const meRes = await fetch('http://localhost:4100/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${registerData.token}`
          }
        });
        const meData = await meRes.json();
        
        tests.push({
          name: 'Protected Route',
          success: meData.success,
          message: meData.message
        });
      }
    } catch (error) {
      tests.push({
        name: 'API Tests',
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }

    setResults(tests);
  };

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-24 h-12 bg-wawa-red-600 rounded-t-full flex items-center justify-center pt-2 shadow-lg 
                   hover:bg-wawa-red-700 transition-colors"
        aria-label="Test panel"
      >
        <span className="text-white font-wawaHeading font-bold text-xl translate-y-[2px]">
          TEST
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-25"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 w-64 mb-2 rounded-xl bg-white bg-opacity-90 
                         shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-sm"
            >
              <div className="p-4">
                <button
                  onClick={runAuthTests}
                  className="w-full px-4 py-2 text-sm bg-wawa-yellow-400 
                           text-wawa-red-600 rounded-lg hover:bg-wawa-yellow-500"
                >
                  Run Auth Tests
                </button>

                {results.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {results.map((result, index) => (
                      <div 
                        key={index}
                        className={`p-2 rounded ${
                          result.success ? 'bg-green-100' : 'bg-red-100'
                        }`}
                      >
                        <div className="font-medium">{result.name}</div>
                        <div className="text-sm">{result.message}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestPanel; 