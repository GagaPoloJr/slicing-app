function getCategoryDescription(category: string): string {
  switch (category.toLowerCase()) {
    case 'like':
      return 'liked a video';
    case 'add':
      return 'added a new video';
    case 'unlock':
      return 'unlocked a new badge';
    case 'comment':
      return 'commented';
    case 'upload':
      return 'uploaded a new file';
    case 'share':
      return 'shared a document';
    default:
      return 'an unknown category';
  }
}

export default getCategoryDescription;
