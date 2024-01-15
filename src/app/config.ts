const baseUrl = (apiPath: string): string => {
    const baseUrl = "http://localhost:3000";
    return `${baseUrl}/${apiPath}`;
  };
  
  export default baseUrl;
  