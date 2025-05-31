import React from "react";

function Pre(props) {
  if (!props.load) return null; // ✅ Don't render anything if not loading

  return (
    <div id="preloader">
      {/* Optional: You can add a spinner or logo here */}
    </div>
  );
}

export default Pre;
