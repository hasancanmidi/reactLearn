import { useNavigate } from "react-router-dom"
export const data =[
  {
    id:0,
    name:"React",
    description:"React açıklama"
  },
  {
    id:1,
    name:"Vue",
    description:"Vue açıklama"
  },
  {
    id:2,
    name:"Angular",
    description:"Angular açıklama"
  }
]

const Home = () => {
  const navigate = useNavigate(); //amacı bir sayfada bir sayfaya click yaptıktan sonra yönlenmesini isterseniz bunu kullanabilrsiniz

  return (
    <div>
      {
        data.map((dt,index) => (
          <div onClick={() => navigate(`detail/${dt.id}`)} style={{cursor:'pointer',marginBottom:'30px'}} key={index}>
            <div>{dt.name}</div>
            <div>{dt.description}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Home