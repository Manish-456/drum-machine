export function Switch({ handlePower, isOn }) {
    const style = isOn
      ? {
          right: 0,
        }
      : {
          left: 0,
        };
    return (
      <div className="switch-box" onClick={handlePower}>
        <div className="switch" style={style} />
      </div>
    );
  }
  