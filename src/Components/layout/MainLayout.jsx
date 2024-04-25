/* eslint-disable react/prop-types */
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh", overflow: "hidden" }}>
      {/* Main Content */}
      <div className="flex-1" style={{ overflowY: "auto" }}>
        {/* Header */}
        <Header />

        {/* Children */}
        <div
          style={{
            padding: "10px 30px",
            maxHeight: "calc(98vh - 100px)",
            overflowY: "auto",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
