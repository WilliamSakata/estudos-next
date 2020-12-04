import { NextPage } from 'next'

function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

  return (
    <div>
      <div>{dynamicDateString} (dinamico)</div>
      <div>{props.staticDateString} (estático)</div>
    </div>
  )
}

export async function getStaticProps() {

  const staticDate = new Date();
  const staticDateString = staticDate.toUTCString();


  return { 
    props: {
      staticDateString
    },
    revalidate: 1
  }
}

export default Tempo;