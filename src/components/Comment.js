import React from 'react';

const Comment = ({ text, media }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md mb-4">
      {/* Posisi satu: Text */}
      <div className="mb-4">
        <p>{text}</p>
      </div>

      {/* Posisi dua: Gambar atau Video */}
      <div>
        {media && (
          <div style={{width:'200px'}}>
            {media.type === 'image' && <img src={media.url} alt="Comment Media" className="w-full h-auto mb-4 rounded-md" />}
            {media.type === 'video' && (
              <video controls className="w-full h-auto mb-4 rounded-md">
                <source src={media.url} type="video/mp4" style={{width:'300px',height:'300px'}} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
