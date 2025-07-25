import { BlogPost } from '../types/blog';

interface BlogModalProps {
  post: BlogPost;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
              {post.category}
            </span>
            
            <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-4">
              {post.title}
            </h2>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
              <span>{post.author}</span>
              <span>{new Date(post.date).toLocaleDateString('hi-IN')}</span>
            </div>
            
            <div className="prose max-w-none">
              {post.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
