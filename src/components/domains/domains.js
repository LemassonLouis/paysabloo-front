import Activities from "../activities/activities";

import "./domains.css";

function Domains({ domains }) {
  return (
    <>
      {domains.map(domain => {
        return (
          <section key={domain.id}>
            <h2>{domain.title}</h2>
            <Activities activities={domain.activities || []} />
          </section>
        )
      })}
    </>
  )
}

export default Domains;