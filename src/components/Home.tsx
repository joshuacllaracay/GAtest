import { useState } from "react";
import importedQuestionsData from "./questions.json";
import { gaCustomEventTracking } from "../gaInitialize";

interface QuestionData {
  title: string;
  data: string;
}

const Home = () => {
  const [isHelpModalOpen, setHelpModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionData | null>(null);
  const [questions] = useState<QuestionData[]>(importedQuestionsData.data);

  const openHelpModal = () => {
    setHelpModalOpen(true);
    gaCustomEventTracking('User','User open help modal');
  };

  const closeHelpModal = () => {
    setHelpModalOpen(false);
    setSelectedQuestion(null);
  };

  const openQuestionModal = (questionData: QuestionData) => {
    setSelectedQuestion(questionData);

    // Log and send GA event for opening a question modal
    gaCustomEventTracking('User', `User Clicked on question '${questionData.title}'`);
    console.log(`User Clicked on question '${questionData.title}'`);
  };

  const closeQuestionModal = () => {
    setSelectedQuestion(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {/* Help Dialog Button */}
      <button onClick={openHelpModal} className="mt-4 p-2 bg-blue-500 text-white">
        Help Dialog
      </button>

      {/* Help Dialog */}
      {isHelpModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg w-1/2">
            <h2 className="text-2xl mb-4">Help Dialog</h2>

            {/* Questions Buttons */}
            {questions.map((questionData: QuestionData) => (
              <button key={questionData.title} onClick={() => openQuestionModal(questionData)} className="mr-2 p-2 bg-green-500 text-white">
                {questionData.title}
              </button>
            ))}

            {/* Question Modals */}
            {questions.map((questionData: QuestionData) => (
              selectedQuestion === questionData && (
                <div key={questionData.title} className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white p-4 rounded-lg w-1/2 relative">
                    <h2 className="text-2xl mb-4">{questionData.title}</h2>
                    {/* Add your question content here */}
                    <p>{questionData.data}</p>
                    <button onClick={closeQuestionModal} className="p-2 bg-red-500 text-white absolute bottom-4 right-4">
                      Close
                    </button>
                  </div>
                </div>
              )
            ))}

            {/* Close Button */}
            <button onClick={closeHelpModal} className="mt-4 p-2 bg-red-500 text-white">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
