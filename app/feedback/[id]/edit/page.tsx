import { notFound } from 'next/navigation';

import { getProductRequestById } from '@/lib/data/product-requests';

export default async function EditFeedbackPage({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const feedback = await getProductRequestById(id);

  if (!feedback) {
    notFound();
  }

  return (
    <>
      <h1>Editing &lsquo;{feedback.title}&rsquo;</h1>
      <form>
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
          <label htmlFor="status-select">Update Status</label>
          <select name="status" id="status-select">
            <option value="suggestion">Suggestion</option>
            <option value="planned">Planned</option>
            <option value="in-progress">In-Progress</option>
            <option value="live">Live</option>
          </select>
        </div>

        <div>
          <label htmlFor="description-input">Feedback Detail</label>
          <input type="text" id="description-input" name="description" />
        </div>

        <div>
          <button type="button">Delete</button>
          <button type="button">Cancel</button>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </>
  );
}
