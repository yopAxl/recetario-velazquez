import { useState } from 'react'
import { recipes } from './recipes'
import './App.css'

/* ── Icons (inline SVG — consistent 20px stroke system) ── */
function IconClock() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}
function IconChef() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
      <line x1="6" y1="17" x2="18" y2="17"/>
    </svg>
  )
}
function IconBook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )
}
function IconMap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
      <line x1="9" y1="3" x2="9" y2="18"/>
      <line x1="15" y1="6" x2="15" y2="21"/>
    </svg>
  )
}
function IconInfo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
}

/* ── Sidebar nav item ── */
function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      className={`nav-item${active ? ' nav-item--active' : ''}`}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
    >
      <span className="nav-item__icon" aria-hidden="true">{icon}</span>
      <span className="nav-item__label">{label}</span>
    </button>
  )
}

/* ── Recipe list row ── */
function RecipeRow({ recipe, selected, onClick }) {
  return (
    <button
      id={`recipe-row-${recipe.id}`}
      className={`recipe-row${selected ? ' recipe-row--selected' : ''}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className="recipe-row__num" aria-hidden="true">
        {String(recipe.num).padStart(2, '0')}
      </span>
      <span className="recipe-row__body">
        <span className="recipe-row__title">{recipe.title}</span>
        <span className="recipe-row__origin">{recipe.origin}</span>
      </span>
      <span className="recipe-row__meta">
        <span className="recipe-row__time">
          <IconClock /> {recipe.time}
        </span>
        <span className="recipe-row__servings">{recipe.servings}</span>
      </span>
    </button>
  )
}

/* ── Difficulty badge ── */
const DIFFICULTY_CLASS = {
  Baja:  'badge--low',
  Media: 'badge--mid',
  Alta:  'badge--high',
}

/* ── Recipe detail panel ── */
function RecipeDetail({ recipe }) {
  return (
    <article
      key={recipe.id}
      id={`recipe-detail-${recipe.id}`}
      className="detail"
      aria-label={`Receta: ${recipe.title}`}
    >
      <header className="detail__header">
        <p className="detail__tag">{recipe.origin}</p>
        <h1 className="detail__title">{recipe.title}</h1>
        <p className="detail__subtitle">{recipe.subtitle}</p>

        {/* Signature move: amber→teal Pacific sunset gradient line */}
        <div className="detail__dish-image">
          <img
            src={recipe.image}
            alt={recipe.imageAlt}
            className="detail__dish-img"
            loading="eager"
          />
        </div>
        <div className="detail__divider" aria-hidden="true" />

        <p className="detail__description">{recipe.description}</p>

        <div className="detail__chips" role="list" aria-label="Información de la receta">
          <div className="chip" role="listitem">
            <IconClock />
            <span>{recipe.time}</span>
          </div>
          <div className="chip" role="listitem">
            <IconUsers />
            <span>{recipe.servings}</span>
          </div>
          <div className={`chip badge ${DIFFICULTY_CLASS[recipe.difficulty]}`} role="listitem">
            <IconChef />
            <span>{recipe.difficulty}</span>
          </div>
        </div>
      </header>

      <div className="detail__body">
        <section className="ingredients" aria-labelledby={`ing-title-${recipe.id}`}>
          <h2 className="section-title" id={`ing-title-${recipe.id}`}>
            <span>Ingredientes</span>
            <span className="section-title__count">{recipe.ingredients.length}</span>
          </h2>
          <ul className="ingredients__list">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="ingredients__item">
                <span className="ingredients__name">{ing.name}</span>
                <span className="ingredients__qty">{ing.qty}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="steps" aria-labelledby={`steps-title-${recipe.id}`}>
          <h2 className="section-title" id={`steps-title-${recipe.id}`}>
            <span>Preparación</span>
            <span className="section-title__count">{recipe.steps.length} pasos</span>
          </h2>
          <ol className="steps__list">
            {recipe.steps.map((step) => (
              <li key={step.num} className="steps__item">
                <span className="steps__num" aria-hidden="true">{step.num}</span>
                <p className="steps__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  )
}

/* ── About panel ── */
function AboutPanel() {
  return (
    <div className="about-panel">
      <div className="about-panel__inner">
        <div className="about-panel__decoration" aria-hidden="true">
          <span className="about-deco-letter">V</span>
        </div>
        <h1 className="about-panel__title">Recetario Velázquez</h1>
        <div className="about-panel__divider" aria-hidden="true" />
        <p className="about-panel__region">Nayarit, México</p>
        <p className="about-panel__body">
          Una colección curada de recetas de la cocina nayarita: sabores del
          Pacífico, tradiciones de costa, ingredientes que se consiguen en el
          mercado. Sin algoritmos, sin base de datos — solo dos recetas hechas
          con cuidado.
        </p>
        <p className="about-panel__body">
          Construido con React y amor por la comida de Nayarit.
        </p>
        <p className="about-panel__credit">
          <span>Elaborado con ingredientes de la región</span>
          <span className="about-panel__dot" aria-hidden="true">·</span>
          <span>2 recetas en colección</span>
        </p>
      </div>
    </div>
  )
}

/* ── App shell ── */
export default function App() {
  const [activeNav, setActiveNav] = useState('recipes')
  const [selectedId, setSelectedId] = useState(recipes[0].id)

  const selected = recipes.find(r => r.id === selectedId)

  return (
    <div className="app">
      {/* ── Sidebar ── */}
      <aside className="sidebar" aria-label="Navegación principal">
        <div className="sidebar__brand">
          <div className="sidebar__wordmark">Recetario</div>
          <div className="sidebar__name">Velázquez</div>
          <div className="sidebar__region">Nayarit · México</div>
        </div>

        <nav className="sidebar__nav" aria-label="Secciones">
          <NavItem
            icon={<IconBook />}
            label="Recetas"
            active={activeNav === 'recipes'}
            onClick={() => setActiveNav('recipes')}
          />
          <NavItem
            icon={<IconMap />}
            label="Ingredientes"
            active={activeNav === 'ingredients'}
            onClick={() => setActiveNav('ingredients')}
          />
          <NavItem
            icon={<IconInfo />}
            label="Acerca de"
            active={activeNav === 'about'}
            onClick={() => setActiveNav('about')}
          />
        </nav>

        <div className="sidebar__collection" aria-hidden="true">
          <span>{recipes.length} recetas</span>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="main" id="main-content">
        {/* ── Top bar ── */}
        <header className="topbar" role="banner">
          <h2 className="topbar__heading">
            {activeNav === 'recipes' && 'Colección de recetas'}
            {activeNav === 'ingredients' && 'Ingredientes'}
            {activeNav === 'about' && 'Acerca de'}
          </h2>
          <div className="topbar__meta" aria-label="Colección">
            <span>Nayarit · México</span>
            <span className="topbar__dot" aria-hidden="true">·</span>
            <span>{recipes.length} recetas</span>
          </div>
        </header>

        {/* ── Content area ── */}
        {activeNav === 'recipes' && (
          <div className="content-split">
            {/* Recipe list */}
            <aside className="recipe-list" aria-label="Lista de recetas">
              <p className="recipe-list__label">Selecciona una receta</p>
              {recipes.map(r => (
                <RecipeRow
                  key={r.id}
                  recipe={r}
                  selected={selectedId === r.id}
                  onClick={() => setSelectedId(r.id)}
                />
              ))}
            </aside>

            {/* Recipe detail */}
            <section className="detail-area" aria-live="polite">
              {selected && <RecipeDetail recipe={selected} />}
            </section>
          </div>
        )}

        {activeNav === 'ingredients' && (
          <div className="content-full">
            <div className="ingredients-overview">
              <h1 className="ingredients-overview__title">Despensa de la colección</h1>
              <p className="ingredients-overview__sub">
                Todo lo que necesitas para preparar las dos recetas de Nayarit.
              </p>
              <div className="ingredients-overview__divider" aria-hidden="true" />
              <div className="ingredients-overview__grid">
                {recipes.map(r => (
                  <div key={r.id} className="ing-group">
                    <h2 className="ing-group__title">{r.title}</h2>
                    <ul className="ing-group__list">
                      {r.ingredients.map((ing, i) => (
                        <li key={i} className="ing-group__item">
                          <span>{ing.name}</span>
                          <span className="ing-group__qty">{ing.qty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeNav === 'about' && (
          <div className="content-full">
            <AboutPanel />
          </div>
        )}
      </main>
    </div>
  )
}
