import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <span className="header__title--f">MON</span>
          <span className="header__title--s">EY</span>
        </h1>
        <h1 className="header__title">
          <span className="header__title--f">TRA</span>
          <span className="header__title--s">CKER</span>
        </h1>
      </div>
    </header>
  )
}