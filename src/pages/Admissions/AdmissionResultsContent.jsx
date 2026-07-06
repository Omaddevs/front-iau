import { useEffect, useMemo, useState } from "react";
import {
  IoCalendarOutline,
  IoCheckmarkCircleOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoCloseCircleOutline,
  IoFilterOutline,
  IoLanguageOutline,
  IoPeopleOutline,
  IoRefreshOutline,
  IoSchoolOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useLanguage } from "../../i18n/LanguageContext";
import resultsData from "../../data/admissionResults2026.json";
import "./AdmissionResultsContent.css";

const FIELDS = {
  direction: "Ta'lim yo'nalishi",
  language: "Ta'lim tili",
  form: "Ta'lim shakli",
  examDate: "Imtihon sanasi",
};

function parseDate(value) {
  const [d, m, y] = String(value).split(".").map(Number);
  return new Date(y, m - 1, d).getTime();
}

function sortDates(values) {
  return [...values].sort((a, b) => parseDate(a) - parseDate(b));
}

function uniqueValues(records, field) {
  return [...new Set(records.map((r) => r[field]).filter(Boolean))].sort((a, b) =>
    String(a).localeCompare(String(b), "uz")
  );
}

const PAGE_SIZE = 50;

function scoreTone(score) {
  return score >= 36 ? "high" : "low";
}

export default function AdmissionResultsContent() {
  const { t } = useLanguage();
  const copy = (key) => t(`admissionResults.${key}`);

  const [filters, setFilters] = useState({
    direction: "",
    language: "",
    form: "",
    examDate: "",
  });
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filterOptions = useMemo(() => {
    const applyExcept = (exceptKey) => {
      return resultsData.filter((row) => {
        if (exceptKey !== "direction" && filters.direction && row[FIELDS.direction] !== filters.direction) return false;
        if (exceptKey !== "language" && filters.language && row[FIELDS.language] !== filters.language) return false;
        if (exceptKey !== "form" && filters.form && row[FIELDS.form] !== filters.form) return false;
        if (exceptKey !== "examDate" && filters.examDate && row[FIELDS.examDate] !== filters.examDate) return false;
        return true;
      });
    };

    return {
      direction: uniqueValues(applyExcept("direction"), FIELDS.direction),
      language: uniqueValues(applyExcept("language"), FIELDS.language),
      form: uniqueValues(applyExcept("form"), FIELDS.form),
      examDate: sortDates(uniqueValues(applyExcept("examDate"), FIELDS.examDate)),
    };
  }, [filters]);

  const filteredResults = useMemo(() => {
    const query = search.trim().toLowerCase();

    return resultsData.filter((row) => {
      if (filters.direction && row[FIELDS.direction] !== filters.direction) return false;
      if (filters.language && row[FIELDS.language] !== filters.language) return false;
      if (filters.form && row[FIELDS.form] !== filters.form) return false;
      if (filters.examDate && row[FIELDS.examDate] !== filters.examDate) return false;
      if (query) {
        const haystack = [
          row.ID,
          row["Abituriyent F.I.O."],
          row[FIELDS.direction],
          row["Imtihon joyi"],
          row["Imtihon natijasi"],
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [filters, search]);

  const totalPages = Math.max(1, Math.ceil(filteredResults.length / PAGE_SIZE));

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, search]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedResults = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredResults.slice(start, start + PAGE_SIZE);
  }, [filteredResults, currentPage]);

  const pageFrom = filteredResults.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const pageTo = Math.min(currentPage * PAGE_SIZE, filteredResults.length);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;
  const hasAnySelection = activeFilterCount > 0 || search.trim().length > 0;

  const stats = useMemo(
    () => ({
      total: resultsData.length,
      directions: uniqueValues(resultsData, FIELDS.direction).length,
      languages: uniqueValues(resultsData, FIELDS.language).length,
      dates: sortDates(uniqueValues(resultsData, FIELDS.examDate)).length,
    }),
    []
  );

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ direction: "", language: "", form: "", examDate: "" });
    setSearch("");
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    document.querySelector(".ar-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filterConfig = [
    { key: "direction", label: copy("filterDirection"), icon: IoSchoolOutline, options: filterOptions.direction },
    { key: "language", label: copy("filterLanguage"), icon: IoLanguageOutline, options: filterOptions.language },
    { key: "form", label: copy("filterForm"), icon: IoPeopleOutline, options: filterOptions.form },
    { key: "examDate", label: copy("filterExamDate"), icon: IoCalendarOutline, options: filterOptions.examDate },
  ];

  return (
    <div className="ar-content">
      <section className="ar-intro">
        <div className="ar-intro-badge">{copy("badge")}</div>
        <h2>{copy("introTitle")}</h2>
        <p>{copy("introText")}</p>
        <div className="ar-stats">
          <article>
            <strong>{stats.total}</strong>
            <span>{copy("statCandidates")}</span>
          </article>
          <article>
            <strong>{stats.directions}</strong>
            <span>{copy("statDirections")}</span>
          </article>
          <article>
            <strong>{stats.dates}</strong>
            <span>{copy("statExamDates")}</span>
          </article>
        </div>
      </section>

      <section className="ar-filters" aria-label={copy("filtersLabel")}>
        <div className="ar-filters-head">
          <div className="ar-filters-title">
            <IoFilterOutline aria-hidden="true" />
            <h3>{copy("filtersTitle")}</h3>
          </div>
          {hasAnySelection && (
            <button type="button" className="ar-clear-btn" onClick={clearFilters}>
              <IoRefreshOutline />
              {copy("clearFilters")}
            </button>
          )}
        </div>

        <div className="ar-filter-grid">
          {filterConfig.map(({ key, label, icon: Icon, options }) => (
            <label key={key} className="ar-filter-field">
              <span className="ar-filter-label">
                <Icon aria-hidden="true" />
                {label}
              </span>
              <select
                value={filters[key]}
                onChange={(e) => updateFilter(key, e.target.value)}
                aria-label={label}
              >
                <option value="">{copy("filterAll")}</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>

        <div className="ar-search">
          <IoSearchOutline aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={copy("searchPlaceholder")}
            aria-label={copy("searchPlaceholder")}
          />
        </div>

        {activeFilterCount > 0 && (
          <div className="ar-active-filters">
            {filterConfig.map(({ key, label }) =>
              filters[key] ? (
                <button
                  key={key}
                  type="button"
                  className="ar-chip"
                  onClick={() => updateFilter(key, "")}
                >
                  <span>{label}: {filters[key]}</span>
                  <IoCloseCircleOutline />
                </button>
              ) : null
            )}
          </div>
        )}
      </section>

      <section className="ar-results" aria-live="polite">
        <div className="ar-results-head">
          <h3>{copy("resultsTitle")}</h3>
          <div className="ar-results-meta">
            <span className="ar-results-count">
              {copy("resultsCount").replace("{count}", filteredResults.length)}
            </span>
            {filteredResults.length > 0 && (
              <span className="ar-results-range">
                {copy("pageRange")
                  .replace("{from}", pageFrom)
                  .replace("{to}", pageTo)
                  .replace("{total}", filteredResults.length)}
              </span>
            )}
          </div>
        </div>

        {filteredResults.length === 0 ? (
          <div className="ar-empty">
            <IoSearchOutline />
            <h4>{copy("emptyTitle")}</h4>
            <p>{copy("emptyText")}</p>
            <button type="button" className="ar-empty-btn" onClick={clearFilters}>
              {copy("clearFilters")}
            </button>
          </div>
        ) : (
          <>
            <div className="ar-table-wrap">
              <table className="ar-table">
                <thead>
                  <tr>
                    <th>{copy("colId")}</th>
                    <th>{copy("colName")}</th>
                    <th>{copy("colDirection")}</th>
                    <th>{copy("colLanguage")}</th>
                    <th>{copy("colForm")}</th>
                    <th>{copy("colExamDate")}</th>
                    <th>{copy("colExamPlace")}</th>
                    <th>{copy("colScore")}</th>
                    <th>{copy("colResult")}</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedResults.map((row) => {
                    const score = row["To'plangan ball"];
                    return (
                      <tr key={row.ID}>
                        <td className="ar-col-id" data-label={copy("colId")}>
                          <code>{row.ID}</code>
                        </td>
                        <td data-label={copy("colName")}>
                          <strong>{row["Abituriyent F.I.O."]}</strong>
                        </td>
                        <td data-label={copy("colDirection")}>{row[FIELDS.direction]}</td>
                        <td data-label={copy("colLanguage")}>{row[FIELDS.language]}</td>
                        <td data-label={copy("colForm")}>{row[FIELDS.form]}</td>
                        <td data-label={copy("colExamDate")}>{row[FIELDS.examDate]}</td>
                        <td data-label={copy("colExamPlace")}>{row["Imtihon joyi"]}</td>
                        <td data-label={copy("colScore")}>
                          <span className={`ar-score ar-score--${scoreTone(score)}`}>{score}</span>
                        </td>
                        <td data-label={copy("colResult")}>
                          <span className="ar-status">
                            <IoCheckmarkCircleOutline />
                            {row["Imtihon natijasi"]}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="ar-cards">
              {paginatedResults.map((row) => {
                const score = row["To'plangan ball"];
                return (
                  <article key={row.ID} className="ar-card">
                    <div className="ar-card-top">
                      <code>{row.ID}</code>
                      <span className={`ar-score ar-score--${scoreTone(score)}`}>{score}</span>
                    </div>
                    <h4>{row["Abituriyent F.I.O."]}</h4>
                    <dl className="ar-card-meta">
                      <div>
                        <dt>{copy("colDirection")}</dt>
                        <dd>{row[FIELDS.direction]}</dd>
                      </div>
                      <div>
                        <dt>{copy("colLanguage")}</dt>
                        <dd>{row[FIELDS.language]}</dd>
                      </div>
                      <div>
                        <dt>{copy("colForm")}</dt>
                        <dd>{row[FIELDS.form]}</dd>
                      </div>
                      <div>
                        <dt>{copy("colExamDate")}</dt>
                        <dd>{row[FIELDS.examDate]}</dd>
                      </div>
                      <div className="ar-card-meta-wide">
                        <dt>{copy("colExamPlace")}</dt>
                        <dd>{row["Imtihon joyi"]}</dd>
                      </div>
                    </dl>
                    <p className="ar-card-status">
                      <IoCheckmarkCircleOutline />
                      {row["Imtihon natijasi"]}
                    </p>
                  </article>
                );
              })}
            </div>

            {totalPages > 1 && (
              <nav className="ar-pagination" aria-label={copy("paginationLabel")}>
                <button
                  type="button"
                  className="ar-pag-btn"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label={copy("pagePrev")}
                >
                  <IoChevronBackOutline />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    className={`ar-pag-btn${page === currentPage ? " ar-pag-btn--active" : ""}`}
                    onClick={() => goToPage(page)}
                    aria-current={page === currentPage ? "page" : undefined}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  className="ar-pag-btn"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label={copy("pageNext")}
                >
                  <IoChevronForwardOutline />
                </button>
              </nav>
            )}
          </>
        )}
      </section>

      <p className="ar-footnote">{copy("footnote")}</p>
    </div>
  );
}
