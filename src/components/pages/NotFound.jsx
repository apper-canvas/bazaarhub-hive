import { useNavigate } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-lg">
        <div className="relative">
          <div className="text-9xl font-bold text-gray-200">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <ApperIcon name="SearchX" size={80} className="text-gray-400" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
        
        <p className="text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button onClick={() => navigate("/")} size="lg">
            <ApperIcon name="Home" size={20} />
            Go to Homepage
          </Button>
          
          <Button onClick={() => navigate(-1)} variant="outline" size="lg">
            <ApperIcon name="ArrowLeft" size={20} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;