export default function NewFeedbackPage() {
  return (
    <>
      <h1>Create New Feedback</h1>
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="title-input">Feedback Title</label>
          <input type="text" id="title-input" name="title" />
        </div>

        <div>
          <label htmlFor="category-select">Category</label>
          <select name="category" id="category-select">
            <option value="feature">Feature</option>
            <option value="ui">UI</option>
            <option value="ux">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
          </select>
        </div>

        <div>
          <label htmlFor="description-input">Feedback Detail</label>
          <input type="text" id="description-input" name="description" />
        </div>

        <div>
          <button type="button">Cancel</button>
          <button type="submit">Add Feedback</button>
        </div>
      </form>
    </>
  );
}
