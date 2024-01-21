import './Details.scss';

enum fa {
  "IP ADDRESS" = 'IP ADDRESS',
  "LOCATION" = 'LOCATION',
  "TIMEZONE" = 'TIMEZONE',
  "ISP" = 'ISP',
}

type detailsType = {
  "IP ADDRESS": string,
  "LOCATION": string,
  "TIMEZONE": string,
  "ISP": string,
}

type Prop = {
  details: detailsType
}

function Details({ details }: Prop) {
  return (
    <div className="details">
      {
        Object.keys(details).map((key: string, index) => (<div className="info" key={index}>
          <div>
            <p className="title">{key}</p>
            {/* <p>{details[key as keyof detailsType]}</p> */}
            <p className="subtext">{details[key as fa]}</p>
          </div>
        </div>))
      }
    </div>
  );
}

export default Details;
