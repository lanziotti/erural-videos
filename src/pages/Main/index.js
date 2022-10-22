import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.css';

function Main() {

  return (
    <>
      <Header />
      <main>
        <div className='list-videos'>
          <div className='item-video'>
            <iframe width="230" height="110" src="https://www.youtube.com/embed/YnedU_RB8k8?list=PL9_hgHG4QtNBn6nFhGv45PEaxP3mo267K" title="LOTE 1-3-2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='title-video'>
              <h2>Saiba mais sobre a pecuária no Brasil</h2>
            </div>
          </div>
          <div className='item-video'>
            <iframe width="230" height="110" src="https://www.youtube.com/embed/sZcqeMSmTJA?list=PL9_hgHG4QtNBn6nFhGv45PEaxP3mo267K" title="LOTE 2-3-10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='title-video'>
              <h2>Saiba mais sobre a pecuária no Brasil</h2>
            </div>
          </div>
          <div className='item-video'>
            <iframe width="230" height="110" src="https://www.youtube.com/embed/fm2QE5kDphk?list=PL9_hgHG4QtNBn6nFhGv45PEaxP3mo267K" title="LOTE 3-3-11" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='title-video'>
              <h2>Saiba mais sobre a pecuária no Brasil</h2>
            </div>
          </div>
          <div className='item-video'>
            <iframe width="230" height="110" src="https://www.youtube.com/embed/YgMrvB_KOyk?list=PL9_hgHG4QtNBn6nFhGv45PEaxP3mo267K" title="LOTE 9-3-23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='title-video'>
              <h2>Saiba mais sobre a pecuária no Brasil</h2>
            </div>
          </div>
          <div className='item-video'>
            <iframe width="230" height="110" src="https://www.youtube.com/embed/2npqt0_fDRg?list=PL9_hgHG4QtNBn6nFhGv45PEaxP3mo267K" title="LOTE 4-3-8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='title-video'>
              <h2>Saiba mais sobre a pecuária no Brasil</h2>
            </div>
          </div>
          <div className='item-video'>
            <iframe width="230" height="110" src="https://www.youtube.com/embed/yXLwdlQBFmI?list=PL9_hgHG4QtNBn6nFhGv45PEaxP3mo267K" title="LOTE 7-3-19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='title-video'>
              <h2>Saiba mais sobre a pecuária no Brasil</h2>
            </div>
          </div>
        </div>
        <div className='video-played'>
          <iframe width="100%" height="700" src="https://www.youtube.com/embed/idFDqft11m0" title="A nova erural" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h2>A nova eRural</h2>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Main;
