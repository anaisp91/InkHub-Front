export const ArtistForm = ({
  onSubmit,
  onChange,
  form,
  title,
  loading,
  error,
  withPassword,
  withEmail,
}) => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-center text-gray-300 text-4xl pt-10 ">
          {title}
        </h2>
      </div>
      <div className="flex justify-center mx-10">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-3xl mt-10 p-10 bg-gray-700 text-white font-serif"
        >
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-[1rem] font-medium text-heading"
              >
                Name
              </label>
              <input
                onChange={onChange}
                type="text"
                id="name"
                name="name"
                value={form.name}
                className="bg-slate-300  rounded-md text-heading text-sm text-slate-900 rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs font-sans"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-[1rem] font-medium text-heading"
              >
                Last name
              </label>
              <input
                onChange={onChange}
                type="text"
                id="lastName"
                name="lastName"
                value={form.lastName}
                className="bg-slate-300  rounded-md text-heading text-sm text-slate-900 rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs font-sans"
                required
              />
            </div>

            <div>
              <label
                htmlFor="persId"
                className="block mb-2 text-[1rem] font-medium text-heading"
              >
                Personal Id
              </label>
              <input
                onChange={onChange}
                type="text"
                id="persId"
                name="persId"
                value={form.persId}
                className="bg-slate-300  rounded-md text-heading text-sm text-slate-900 rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs font-sans"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phoneNum"
                className="block mb-2 text-[1rem] font-medium text-heading"
              >
                Phone number
              </label>
              <input
                onChange={onChange}
                type="tel"
                id="phoneNum"
                name="phoneNum"
                value={form.phoneNum}
                className="bg-slate-300  rounded-md text-heading text-sm text-slate-900 rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs font-sans"
                required
              />
            </div>

            <div>
              <label
                htmlFor="SanNum"
                className="block mb-2 text-[1rem] font-medium text-heading"
              >
                Sanitary Number
              </label>
              <input
                onChange={onChange}
                type="text"
                id="SanNum"
                name="SanNum"
                value={form.SanNum}
                className="bg-slate-300  rounded-md text-heading text-sm text-slate-900 rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs font-sans"
                required
              />
            </div>
          </div>
          {withEmail && (
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-[1rem] font-medium text-heading"
              >
                Email address
              </label>
              <input
                onChange={onChange}
                type="email"
                id="email"
                name="email"
                value={form.email}
                className="bg-slate-300  rounded-md text-heading text-sm text-slate-900 rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs font-sans"
                required
              />
            </div>
          )}

          {withPassword && (
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-[1rem] font-medium text-heading"
              >
                Password
              </label>
              <input
                onChange={onChange}
                type="password"
                id="password"
                name="password"
                value={form.password}
                className="bg-slate-300  rounded-md text-heading text-sm text-slate-900 rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                required
              />
            </div>
          )}

          {error && <p>{error}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="text-slate-900 bg-slate-400 box-border rounded-md border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-[1rem] px-5 py-2 focus:outline-none "
            >
              {loading ? "Añadiendo Artista" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
