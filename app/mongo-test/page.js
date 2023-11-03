import churches from "lib/mongo/index"

async function init() {
  return (
    <div>
            <h1>Maps for all churches</h1>
            <p>
                <small>Click to access</small>
            </p>
            <ul>
                {churches.map((church) => (
                    <li>
                        <a href={church.map_url} rel="noreferrer noopener" target="_blank">{church.name}</a>
                    </li>
                ))}
            </ul>
        </div>
  );
  }

  export default init