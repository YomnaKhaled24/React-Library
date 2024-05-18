function Header(props) {
  return (
    <>
      <div class="about-bg">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="abouttitle">
                <h2>{props.content}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
