import Header from './Header';
import Footer from './Footer';
import JSON from './data.json';

const Data = JSON.map(

        (data) => 
        {
            return(
              <div>
              <br />
                    <div className="card"shadow p-3 mb-5 bg-body rounded>
                      <br />
                      
                    <div key={data.id}>
                        <h4>{data.game}</h4>
                        <p><img src={data.image} alt="" className="img-fluid"/></p>
                        <p>{data.description}</p>
                        <h5>{data.price}</h5>
                        
                    </div>
                    
                    </div>
                    </div>
            );
        }

);

function App() {
  return (
    <div>
      <Header />
      <div className="p-3 shadow border row">
        <div className="col-8">
          {Data}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
