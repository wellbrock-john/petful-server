# Petful Server

## Petful is a demo application to showcase full stack capabilities. It allows a user to enter a waiting queue by simply providing their name. For demo purposes, the queue does not change unless a user has entered a name. When that happens, the person who is up next in the queue will 'adopt' a pet. That's it! Simple and straightforward.

[Live Site](https://petful-client-mu.vercel.app/)

[Frontend Repo](https://github.com/wellbrock-john/petful-client)

## [Backend Repo](https://github.com/wellbrock-john/petful-server)

## API Documentation

- /people
- - GET - gets data to display people currently in the queue

```
fetch(`${API_URL}/people`)
        .then((response) =>
			response.json()
		);
```

- - POST - places a user at the end of the queue

```
someFunction = (name) => {
		const aConfig = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name }),
		};

		fetch(`${API_URL}/people`, aConfig)
			.then((response) => response.json())
			.then(() => {
				this.setState({
					people: [...this.state.people, name],
				});
			});
	};
```

- /pets
- - GET - gets pet data to display images and information for specific pets

```
fetch(`${API_URL}/pets`)
        .then((response) =>
			response.json()
        );
```

- - DELETE - deletes a pet's data after it is 'adopted' and removes the adopter from the queue

```
someFunction = (type) => {
    const aConfig = {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ type }),
		};

		fetch(`${API_URL}/pets`, aConfig)
			.then((response) => response.json())
			.then((data) => {
				//your block of code here
			});
}
```

## Tech Stack

### React | Node.js | Express | HTML | CSS | Linked Lists

---

Created by @wellbrock-john
