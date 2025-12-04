// ===== GOOGLE DRIVE API =====

function createFolder() {
  const folderName = 'My New Folder ' + new Date().toLocaleDateString();
  
  const folder = Drive.Files.create({
    title: folderName,
    mimeType: 'application/vnd.google-apps.folder',
    parents: [{id: 'root'}]
  });
  
  logInfo('สร้างโฟลเดอร์: ' + folder.id);
  return folder.id;
}

function searchFiles(query) {
  const results = Drive.Files.list({
    q: query,
    spaces: 'drive',
    pageSize: 10,
    fields: 'files(id, name, mimeType, createdTime)'
  });
  
  if (results.files && results.files.length > 0) {
    results.files.forEach(file => {
      Logger.log(`📄 ${file.name} (${file.id})`);
    });
  } else {
    logError('ไม่พบไฟล์');
  }
  
  return results.files;
}

function copyFile(fileId, newName) {
  const copiedFile = Drive.Files.copy({
    title: newName
  }, fileId);
  
  logInfo('คัดลอกไฟล์: ' + copiedFile.id);
  return copiedFile.id;
}

function moveFileToFolder(fileId, folderId) {
  const file = Drive.Files.get(fileId, {
    fields: 'parents'
  });
  
  const previousParents = file.parents.map(p => p.id).join(',');
  
  Drive.Files.update({
    parents: [{id: folderId}]
  }, fileId, {
    removeParents: previousParents,
    addParents: folderId
  });
  
  logInfo('ย้ายไฟล์ไปโฟลเดอร์: ' + folderId);
}

function deleteFile(fileId) {
  Drive.Files.remove(fileId);
  logInfo('ลบไฟล์: ' + fileId);
}
