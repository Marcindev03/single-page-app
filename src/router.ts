export const navigateTo = (url: string): void => {
  history.pushState(null, '', url);
  router();
};

export const router = async (): Promise<void> => {
  const routes = [
    { path: '/', view: () => console.log('Viewing Dashboard') },
    { path: '/posts', view: () => console.log('Viewing Dashboard') },
    { path: '/settings', view: () => console.log('Viewing Dashboard') },
  ];

  const potentialMatches = routes.map((route) => ({
    route,
    isMatch: location.pathname === route.path,
  }));

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  console.log(match.route.path);
};
