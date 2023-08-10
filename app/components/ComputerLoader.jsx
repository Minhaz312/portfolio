const { Html,useProgress } = require("@react-three/drei")

const ComputerLoader = () => {
    const {progress} = useProgress()
    console.log("progress: ",progress)
    return (
      <Html
        as='div'
        center
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span className='text-5xl font-extrabold'>Loading...</span>
        <p
          style={{
            fontSize: 34,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {/* {progress.toFixed(2)}% */}
        </p>
      </Html>
    )
  }

  export default ComputerLoader