document.addEventListener('DOMContentLoaded', function() {
    
    const upvoteButtons = document.querySelectorAll('.vote-buttons i:first-child');
    const downvoteButtons = document.querySelectorAll('.vote-buttons i:last-child');
    
    upvoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('upvoted')) {
                this.classList.remove('upvoted');
                this.style.color = '#818384';
            } else {
                this.classList.add('upvoted');
                this.style.color = '#ff4500';
                
                
                const downvoteButton = this.parentElement.querySelector('i:last-child');
                if (downvoteButton.classList.contains('downvoted')) {
                    downvoteButton.classList.remove('downvoted');
                    downvoteButton.style.color = '#818384';
                }
            }
        });
    });
    
    downvoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('downvoted')) {
                this.classList.remove('downvoted');
                this.style.color = '#818384';
            } else {
                this.classList.add('downvoted');
                this.style.color = '#7193ff';
                
                
                const upvoteButton = this.parentElement.querySelector('i:first-child');
                if (upvoteButton.classList.contains('upvoted')) {
                    upvoteButton.classList.remove('upvoted');
                    upvoteButton.style.color = '#818384';
                }
            }
        });
    });
    
    
    const joinButtons = document.querySelectorAll('.join-button');
    
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'Join') {
                this.textContent = 'Joined';
                this.style.backgroundColor = '#1a1a1b';
                this.style.color = '#d7dadc';
                this.style.border = '1px solid #d7dadc';
            } else {
                this.textContent = 'Join';
                this.style.backgroundColor = '#0079d3';
                this.style.color = 'white';
                this.style.border = 'none';
            }
        });
    });
    
    
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            
            tabs.forEach(t => t.classList.remove('active'));
            
            
            this.classList.add('active');
        });
    });

    
    const postTitles = document.querySelectorAll('.post-title');

    postTitles.forEach(title => {
        title.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            if (topic) {
                window.location.href = topic + '.html';
            }
        });
    });

    
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        post.addEventListener('click', function(e) {
            
            if (!e.target.closest('.vote-buttons') && 
                !e.target.closest('.comment-button') && 
                !e.target.closest('.share-button') && 
                !e.target.closest('.join-button') && 
                !e.target.closest('.more-options')) {
                
                const topic = this.getAttribute('data-topic');
                if (topic) {
                    window.location.href = topic + '.html';
                }
            }
        });
    });

    
    const subreddits = document.querySelectorAll('.subreddit');

    subreddits.forEach(subreddit => {
        subreddit.addEventListener('click', function(e) {
            e.stopPropagation(); 
            
            
            let topic = this.textContent.toLowerCase().replace('r/', '');
            
            
            const topicMap = {
                'movies': 'movies',
                'anime': 'anime',
                'animequestions': 'anime',
                'gaming': 'gaming',
                'pcgaming': 'gaming',
                'technology': 'technology'
            };
            
            if (topicMap[topic]) {
                window.location.href = topicMap[topic] + '.html';
            }
        });

        
        subreddit.style.cursor = 'pointer';
        subreddit.style.color = '#4fbcff';
    });

    
    const sidebarSectionHeaders = document.querySelectorAll('.section-header');
    
    sidebarSectionHeaders.forEach(header => {
        
        header.style.cursor = 'pointer';
        
        header.addEventListener('click', function() {
            
            const sectionMenu = this.parentElement.querySelector('.section-menu');
            const icon = this.querySelector('i');
            
            if (sectionMenu.style.display === 'none') {
                
                sectionMenu.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                
                sectionMenu.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });

    
    
    const loginButton = document.querySelector('.login');
    const loginModal = document.getElementById('loginModal');
    const closeButton = document.getElementById('closeLoginModal');
    const loginForm = document.getElementById('loginForm');

    
    if (loginButton && loginModal && closeButton && loginForm) {
        
        loginButton.addEventListener('click', function() {
            loginModal.style.display = 'flex';
        });

        
        closeButton.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });

        
        loginModal.addEventListener('click', function(event) {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });

        
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            
            const username = loginForm.querySelector('input[type="text"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;
            
            
            if (username && password) {
                
                
                console.log('Username:', username);
                console.log('Password:', password);
                
                
                localStorage.setItem('redditUsername', username);
                
                
                loginButton.textContent = username;
                loginButton.style.border = 'none';
                loginButton.style.backgroundColor = 'transparent';
                
                
                loginModal.style.display = 'none';
                
                
                console.log('Successfully logged in as ' + username);
            }
        });
    }
    
    
    const seeMoreLinks = document.querySelectorAll('.see-more a');
    
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            
            showNotification('This feature is not available yet, see you soon nigga!!', 3000);
            
            
            setTimeout(() => {
                showNotification('BOMBARDINO CROCODILO vs ALL Italian Brainrot AI Animals Compilation', 3000);
            }, 3200); 
            
            
            setTimeout(() => {
                window.open('https:
            }, 4000);
        });
    });
    
    
    let activeNotifications = [];
    
    
    function showNotification(message, duration) {
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        
        notification.style.position = 'fixed';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#0079d3';
        notification.style.color = 'white';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '4px';
        notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        notification.style.zIndex = '1000';
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease-in-out';
        notification.style.maxWidth = '300px'; 
        
        
        positionNotification(notification);
        
        
        document.body.appendChild(notification);
        
        
        activeNotifications.push(notification);
        
        
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);
        
        
        setTimeout(() => {
            notification.style.opacity = '0';
            
            
            const index = activeNotifications.indexOf(notification);
            if (index > -1) {
                activeNotifications.splice(index, 1);
            }
            
            
            setTimeout(() => {
                document.body.removeChild(notification);
                
                repositionAllNotifications();
            }, 300);
        }, duration);
    }
    
    
    function positionNotification(notification) {
        if (activeNotifications.length === 0) {
            
            notification.style.bottom = '20px';
        } else {
            
            let bottomPosition = 20;
            
            
            activeNotifications.forEach(activeNotification => {
                bottomPosition += activeNotification.offsetHeight + 10; 
            });
            
            notification.style.bottom = bottomPosition + 'px';
        }
    }
    
    
    function repositionAllNotifications() {
        let bottomPosition = 20;
        
        activeNotifications.forEach(notification => {
            notification.style.bottom = bottomPosition + 'px';
            bottomPosition += notification.offsetHeight + 10;
        });
    }

    
    if (loginButton) {
        const savedUsername = localStorage.getItem('redditUsername');
        if (savedUsername) {
            loginButton.textContent = savedUsername;
            loginButton.style.border = 'none';
            loginButton.style.backgroundColor = 'transparent';
        }
    }
}); 
