
interface AgeGenderHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AgeGenderHeader = ({ activeTab, onTabChange }: AgeGenderHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Age and Gender Demographics</h3>
        <p className="text-sm text-gray-500">
          Weekly Impressions (Millions) by {activeTab === "overview" ? "Age and Gender" : activeTab === "age" ? "Age Groups" : "Gender"}
        </p>
      </div>
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        <button
          onClick={() => onTabChange("overview")}
          className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
            activeTab === "overview" 
              ? "bg-blue-primary text-white shadow-sm" 
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => onTabChange("age")}
          className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
            activeTab === "age" 
              ? "bg-blue-primary text-white shadow-sm" 
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
          }`}
        >
          Age
        </button>
        <button
          onClick={() => onTabChange("gender")}
          className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
            activeTab === "gender" 
              ? "bg-blue-primary text-white shadow-sm" 
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
          }`}
        >
          Gender
        </button>
      </div>
    </div>
  );
};

export default AgeGenderHeader;
